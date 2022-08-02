import { Mask } from 'antd-mobile'
import BottomCard from '../BottomCard/index'
import AttachIcon from '@/assets/icons/attach.png'
import CameraIcon from '@/assets/icons/camera.png'
import GalleryIcon from '@/assets/icons/gallery.png'
import FileIcon from '@/assets/icons/file.png'
import CloseIcon from '@/assets/icons/close.png'
import { fileTypes } from '@/constants/base'
import Camera from './camera'
import styles from './index.scss'
import { useEffect, useRef, useState } from 'react'

interface IAttachProps {
  onAttach?: (para: any) => void
}

export default (props: IAttachProps) => {
  const initFileType = 'image/*'
  const [visible, setVisible] = useState(false)
  const [cameraVisible, setCameraVisible] = useState(false)
  const [fileType, setFileType] = useState(initFileType)
  const [imgSrc, setImgSrc] = useState('')
  const [fileName, setFileName] = useState('')
  const fileUpload = useRef<HTMLInputElement>(null)

  const handleMaskVisible = () => {
    setVisible(!visible)
  }

  const handleCamera = () => {
    setCameraVisible(!cameraVisible)
  }

  const openFileDirectory = (type: string) => {
    setFileType(type)
    setTimeout(() => fileUpload.current?.click(), 0)
  }

  const handleComplete = (img: string) => {
    handleCamera()
    handleMaskVisible()
    setImgSrc(img)
  }

  const onRemove = () => {
    setFileName('')
    setImgSrc('')
  }

  useEffect(() => {
    const input = fileUpload.current as HTMLInputElement
    const handleFile = () => {
      const files = input?.files || []
      if (fileType === initFileType) {
        setImgSrc(URL.createObjectURL(files[0]))
        setFileName('')
      } else {
        setFileName(files[0].name)
        setImgSrc('')
        console.log('file', files[0])
      }

      handleMaskVisible()
    }
    input.addEventListener('change', handleFile)
    console.log(fileUpload.current, fileUpload.current?.files)
  })

  const Attach = (imgSrc: string, fileName: string) => {
    if (imgSrc || fileName) {
      return (
        <div className={styles['file-wrapper']}>
          {imgSrc && (
            <img
              src={imgSrc}
              alt="img upload"
              className={styles['upload-img']}
            />
          )}

          {fileName && (
            <div>
              <img
                src={FileIcon}
                alt="doc icon"
                className={styles['file-icon']}
              />
              <div className={styles.title}>{fileName}</div>
            </div>
          )}
          <img
            src={CloseIcon}
            alt="close icon"
            className={styles.close}
            onClick={onRemove}
          />
        </div>
      )
    } else {
      return (
        <div onClick={handleMaskVisible} className={styles['attach-wrapper']}>
          <img
            src={AttachIcon}
            alt="attach icon"
            className={styles['attach-icon']}
          />
          <span className={styles.title}>Add attachment</span>
        </div>
      )
    }
  }

  return (
    <>
      {Attach(imgSrc, fileName)}
      <Mask
        opacity="thin"
        visible={visible}
        data-testid="attachmentMask"
        onMaskClick={() => handleMaskVisible()}
      >
        <BottomCard>
          <div className={styles['type-wrapper']}>
            {/* camera */}
            <div className={styles['type-bg']} onClick={handleCamera}>
              <img
                src={CameraIcon}
                alt="camera icon"
                className={styles['icon-normal']}
              />
              <span className={styles.name}>Camera</span>
            </div>
            {/* upload image */}
            <div
              className={styles['type-bg']}
              onClick={() => openFileDirectory(initFileType)}
            >
              <img
                src={GalleryIcon}
                alt="gallery icon"
                className={styles['icon-normal']}
              />
              <span className={styles.name}>Image</span>
            </div>
            {/* upload other File except image */}
            <div
              className={styles['type-bg']}
              onClick={() => openFileDirectory(fileTypes)}
            >
              <img
                src={FileIcon}
                alt="doc icon"
                className={styles['icon-doc']}
              />
              <span className={styles.name}>Document</span>
            </div>
          </div>
        </BottomCard>
      </Mask>
      {/* camera page for taking a picture */}
      {cameraVisible && (
        <Camera onBack={handleCamera} onComplete={handleComplete} />
      )}
      {/* input for uploading files */}
      <input
        type="file"
        accept={fileType}
        ref={fileUpload}
        className={styles.hide}
      />
    </>
  )
}
