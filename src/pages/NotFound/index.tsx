import styles from './index.scss'
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()
  const backToHome = () => {
    navigate('/')
  }

  return (
    <div className={styles.wrapper}>
      <h1>Page Not Found</h1>
      <span className={styles.link} onClick={backToHome}>
        Back to Home
      </span>
    </div>
  )
}
