import OnTheWayImg from '@/assets/images/email_on_the_way.png'
import { Button } from 'antd-mobile'
import styles from './index.scss'
import { useLocation, useNavigate } from 'react-router-dom'

interface ILocationState {
  email: string
}

export default () => {
  const location = useLocation()
  const navigate = useNavigate()

  const goBackToLogin = () => {
    navigate('/landing/login')
  }

  return (
    <div className={styles.wrapper}>
      <figure>
        <img src={OnTheWayImg} alt="on-the-way" />
      </figure>
      <h3>Your email is on the way</h3>
      <p className={styles.tip}>
        Check your email {(location.state as ILocationState)?.email} and follow
        the instructions to reset your password
      </p>
      <Button
        className={styles.button}
        block
        color="primary"
        size="large"
        onClick={goBackToLogin}
      >
        Back to Login
      </Button>
    </div>
  )
}
