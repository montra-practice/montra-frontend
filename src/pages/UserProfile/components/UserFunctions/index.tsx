import { Image } from 'antd-mobile'
import { userFunctionsConfigList } from './config'
import { useNavigate } from 'react-router-dom'
import styles from './index.scss'

const UserFunctions = () => {
  const navigate = useNavigate()

  const goToPage = (path: string) => {
    if (path) {
      navigate(path)
    }
  }

  return (
    <div className={styles['user-functions-container']}>
      {userFunctionsConfigList?.map(({ title, icon, path }) => (
        <div
          key={title}
          className={styles['function-item']}
          onClick={() => goToPage(path)}
        >
          <Image src={icon} width={52} height={52} fit="cover" />
          <p className={styles.text}>{title}</p>
        </div>
      ))}
    </div>
  )
}

export default UserFunctions
