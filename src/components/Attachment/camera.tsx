import { useEffect, useState } from 'react'
import { openCamera } from './cameraMethods'
import styles from './camera.scss'

// const VIDEO_WIDTH = 300
// const RATIO = document.body.scrollWidth / document.body.scrollHeight
// const VIDEO_HEIGHT = VIDEO_WIDTH / RATIO

export default () => {
  openCamera()

  const [photograph, setPhotograph] = useState('')
  // const [canvasVisible, setCanvasVisible] = useState(false)

  useEffect(() => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    const cameraBtn = document.getElementById('cameraBtn') as HTMLDivElement
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    const video = document.getElementById('video') as HTMLVideoElement

    cameraBtn.addEventListener('click', function () {
      // draw canvas image

      const { videoWidth, videoHeight } = video
      console.log(
        videoWidth,
        videoHeight,
        window.screen.width,
        document.body.scrollWidth,
        document.body.clientWidth,
      )
      const videoRadio = videoWidth / videoHeight
      const docWidth = document.body.scrollWidth
      // const docHeight = docWidth / videoRadio

      console.log(docWidth / videoRadio)

      context.drawImage(video, 0, 0, 300, 400)
      setPhotograph(canvas.toDataURL('image/jpeg'))
      // setCanvasVisible(true)
    })
  })
  return (
    <>
      <div className={styles.camera}>
        {/* <div> */}
        <video id="video" className={styles.video}></video>
        <canvas id="canvas" className={styles.canvas}></canvas>
        <img src={photograph} className={styles.photo} alt="photograph" />
        {/* </div> */}
        <div id="cameraBtn" className={styles.startBtn}>
          拍照
        </div>
      </div>
    </>
  )
}
