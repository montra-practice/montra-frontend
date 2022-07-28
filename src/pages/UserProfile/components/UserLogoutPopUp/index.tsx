import { FC } from 'react'
import { Popup, Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import Token from '@/utils/token'
import styles from './index.scss'

type UserLogoutPopupProps = {
  visible: boolean
  onCancel: () => void
}
const UserLogoutPopup: FC<UserLogoutPopupProps> = ({ visible, onCancel }) => {
  const navigate = useNavigate()
  const handleLogout = () => {
    Token('token').removeToken()
    navigate('/landing/login')
  }
  return (
    <Popup
      visible={visible}
      onMaskClick={onCancel}
      bodyStyle={{ height: '250px', borderRadius: '24px 24px 0px 0px' }}
    >
      <div className={styles['logout-popup-content-wrapper']}>
        <div className={styles['line']} />
        <p className={styles['title']}>Logout?</p>
        <p className={styles['desc']}>Are you sure do you wanna logout?</p>
        <div className={styles['btn-group']}>
          <Button color="default" onClick={onCancel}>
            No
          </Button>
          <Button color="primary" fill="solid" onClick={handleLogout}>
            Yes
          </Button>
        </div>
      </div>
    </Popup>
  )
}

export default UserLogoutPopup
