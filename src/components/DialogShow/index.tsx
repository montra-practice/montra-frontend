import { Dialog } from 'antd-mobile'
import { CheckCircleFill } from 'antd-mobile-icons'
import styles from './index.scss'

export default (msg: string, fn?: () => void, title?: string) => {
  Dialog.show({
    maskStyle: { background: 'rgba(0,0, 0, 0.3)' },
    bodyStyle: { borderRadius: '16px', width: '100%' },
    header: <CheckCircleFill className={styles.header} />,
    title,
    content: <div className={styles.content}>{msg}</div>,
    onClose: fn,
    closeOnMaskClick: true,
  })
}
