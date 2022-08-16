import { useEffect, useRef, useState } from 'react'
import { openCamera, closeCamera } from './cameraMethods'
import styles from './camera.scss'
import StartIcon from '@/assets/icons/start_icon.png'
import { CheckCircleFill, RedoOutline } from 'antd-mobile-icons'

const VIDEO_WIDTH = document.body.scrollWidth
interface ICameraProps {
  onBack: () => void
  onComplete: (imgSrc: string) => void
}

export default (props: ICameraProps) => {
  const [iconShow, setIconShow] = useState(false)
  const [imgSrc, setImgSrc] = useState('')
  const videoRef = useRef(null)
  const canvasRef = useRef(null)

  const handleDramImg = () => {
    const canvas = canvasRef.current as unknown as HTMLCanvasElement
    const video = videoRef.current as unknown as HTMLVideoElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    console.log(canvas, video, context)
    context.drawImage(video, 0, 0, video.width, video.height)
    setImgSrc(canvas.toDataURL('image/png'))
    setIconShow(true)
  }

  useEffect(() => {
    openCamera()
    return () => {
      closeCamera()
    }
  }, [])

  const goBack = () => {
    props.onBack()
    setIconShow(false)
  }

  const complete = () => {
    props.onComplete(imgSrc)
  }

  return (
    <div className={styles.camera}>
      <video
        ref={videoRef}
        width={VIDEO_WIDTH}
        height="300"
        role="video"
      ></video>
      <canvas
        ref={canvasRef}
        width={VIDEO_WIDTH}
        height="300"
        className={styles.canvas}
        role="canvas"
      ></canvas>
      <div className={styles.bottom}>
        <RedoOutline className={styles.back} onClick={goBack} role="back" />
        <img
          id="cameraBtn"
          src={StartIcon}
          alt="start icon"
          className={styles['camera-btn']}
          onClick={handleDramImg}
        />
        {iconShow && (
          <CheckCircleFill
            className={styles.complete}
            onClick={complete}
            role="complete"
          />
        )}
      </div>
    </div>
  )
}
