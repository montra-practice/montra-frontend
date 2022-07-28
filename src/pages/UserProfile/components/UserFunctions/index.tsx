import { useState } from 'react'
import { Image } from 'antd-mobile'
import { userFunctionsConfigList } from './config'
import { useNavigate } from 'react-router-dom'
import UserLogoutPopup from '../UserLogoutPopUp/index'
import styles from './index.scss'

const UserFunctions = () => {
  const navigate = useNavigate()
  const [logoutVisible, setLogoutVisible] = useState<boolean>(false)

  const goToPage = (path: string) => {
    if (path) {
      navigate(path)
    }
  }

  const handleLogout = () => {
    setLogoutVisible(true)
  }

  const userLogoutPopupProps = {
    visible: logoutVisible,
    onCancel: () => setLogoutVisible(false),
  }

  return (
    <div className={styles['user-functions-container']}>
      {userFunctionsConfigList?.map(({ title, icon, path }) => (
        <div
          key={title}
          data-testid={title}
          className={styles['function-item']}
          onClick={() => (title === 'Logout' ? handleLogout() : goToPage(path))}
        >
          <Image src={icon} width={52} height={52} fit="cover" />
          <p className={styles.text}>{title}</p>
        </div>
      ))}
      <UserLogoutPopup {...userLogoutPopupProps} />
    </div>
  )
}

export default UserFunctions
