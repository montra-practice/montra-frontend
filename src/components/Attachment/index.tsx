import { Mask } from 'antd-mobile'
import BottomCard from '../BottomCard/index'
import AttachIcon from '@/assets/icons/attach.png'
import CameraIcon from '@/assets/icons/camera.png'
import GalleryIcon from '@/assets/icons/gallery.png'
import FileIcon from '@/assets/icons/file.png'
import { fileTypes } from '@/constants/base'
import Camera from './camera'
import styles from './index.scss'
import { useRef, useState } from 'react'

interface IAttachProps {}

export default (props: IAttachProps) => {
  const [visible, setVisible] = useState(false)
  const imgUpload = useRef<HTMLInputElement>(null)
  const fileUpload = useRef<HTMLInputElement>(null)

  const handleMaskVisible = () => {
    setVisible(!visible)
  }

  const openImgDirectory = () => {
    console.log(imgUpload)
    imgUpload.current?.click()
  }

  const openFileDirectory = () => {
    console.log(fileUpload)
    fileUpload.current?.click()
  }

  return (
    <>
      <Camera />
      <div
        onClick={() => handleMaskVisible()}
        className={styles['attach-wrapper']}
      >
        <img
          src={AttachIcon}
          alt="attach icon"
          className={styles['attach-icon']}
        />
        <span className={styles.title}>Add attachment</span>
      </div>
      <Mask
        opacity="thin"
        visible={visible}
        data-testid="attachmentMask"
        onMaskClick={() => handleMaskVisible()}
      >
        <BottomCard>
          <div className={styles['type-wrapper']}>
            <div className={styles['type-bg']}>
              <img
                src={CameraIcon}
                alt="camera icon"
                className={styles['icon-normal']}
              />
              <span className={styles.name}>Camera</span>
            </div>
            <input
              type="file"
              accept="image/*"
              className={styles.hide}
              ref={imgUpload}
            />
            <div className={styles['type-bg']} onClick={openImgDirectory}>
              <img
                src={GalleryIcon}
                alt="gallery icon"
                className={styles['icon-normal']}
              />
              <span className={styles.name}>Image</span>
            </div>
            <input
              type="file"
              accept={fileTypes}
              className={styles.hide}
              ref={fileUpload}
            />
            <div className={styles['type-bg']} onClick={openFileDirectory}>
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
    </>
  )
}
