import { Button, Mask } from 'antd-mobile'
import BottomCard from '../BottomCard'
import styles from './index.scss'

interface IRemoveAlertProps {
  visible: boolean
  title?: string
  description?: string
  onConfirm: () => void
  onCancel: () => void
}

export default (props: IRemoveAlertProps) => {
  return (
    <Mask opacity="thin" visible={props.visible} onMaskClick={props.onCancel}>
      <BottomCard>
        <div className={styles.content}>
          <span className={styles.title}>
            {props.title || 'Remove this Transaction'}
          </span>
          <div className={styles.detail}>
            {props.description ||
              'Are you sure do you wanna remove this transaction?'}
          </div>
          <div className={styles.box}>
            <Button className={styles.no} onClick={props.onCancel}>
              No
            </Button>
            <Button className={styles.yes} onClick={props.onConfirm}>
              Yes
            </Button>
          </div>
        </div>
      </BottomCard>
    </Mask>
  )
}
