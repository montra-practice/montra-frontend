import { useEffect, useState } from 'react'
import { openCamera } from './cameraMethods'
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

  useEffect(() => {
    openCamera()
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const cameraBtn = document.getElementById('cameraBtn') as HTMLDivElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    const video = document.getElementById('video') as HTMLVideoElement

    const handleDramImg = () => {
      context.drawImage(video, 0, 0, video.width, video.height)
      setImgSrc(canvas.toDataURL('image/png'))
      setIconShow(true)
    }
    cameraBtn.addEventListener('click', handleDramImg)

    return () => {
      cameraBtn.removeEventListener('click', handleDramImg)
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
    <>
      <div className={styles.camera}>
        <video id="video" width={VIDEO_WIDTH} height="300"></video>
        <canvas
          id="canvas"
          width={VIDEO_WIDTH}
          height="300"
          className={styles.canvas}
        ></canvas>
        <div className={styles.bottom}>
          <RedoOutline className={styles.back} onClick={goBack} />
          <img
            id="cameraBtn"
            src={StartIcon}
            alt="start icon"
            className={styles['camera-btn']}
          />
          {iconShow && (
            <CheckCircleFill className={styles.complete} onClick={complete} />
          )}
        </div>
      </div>
    </>
  )
}
