import { Mask } from 'antd-mobile'
import BottomCard from '../BottomCard/index'
import AttachIcon from '@/assets/icons/attach.png'
import CameraIcon from '@/assets/icons/camera.png'
import GalleryIcon from '@/assets/icons/gallery.png'
import FileIcon from '@/assets/icons/file.png'

import styles from './index.scss'
import { useState } from 'react'

interface IAttachProps {
  visible: boolean
  hideAttach: (show: boolean) => void
}

export default (props: IAttachProps) => {
  const [visible, setVisible] = useState(false)

  const handleMaskVisible = () => {
    setVisible(!visible)
  }

  return (
    <>
      <div
        onClick={() => handleMaskVisible()}
        className={styles['attach-wrapper']}
      >
        <img
          src={AttachIcon}
          alt="attach icon"
          className={styles['attach-icon']}
        ></img>
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
              ></img>
              <span className={styles.name}>Camera</span>
            </div>
            <div className={styles['type-bg']}>
              <img
                src={GalleryIcon}
                alt="gallery icon"
                className={styles['icon-normal']}
              ></img>
              <span className={styles.name}>Image</span>
            </div>
            <div className={styles['type-bg']}>
              <img
                src={FileIcon}
                alt="doc icon"
                className={styles['icon-doc']}
              ></img>
              <span className={styles.name}>Document</span>
            </div>
          </div>
        </BottomCard>
      </Mask>
    </>
  )
}
