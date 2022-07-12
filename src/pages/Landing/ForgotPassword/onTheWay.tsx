import OnTheWayImg from '@/assets/images/email_on_the_way.png'
import { Button } from 'antd-mobile'
import styles from './index.scss'

export default () => {
  return (
    <div className={styles.wrapper}>
      <figure>
        <img src={OnTheWayImg} alt="on-the-way" />
      </figure>
      <h3>Your email is on the way</h3>
      <p>
        Check your email test@test.com and follow the instructions to reset your
        password
      </p>
      <div>
        <Button block color="primary" size="large">
          Back to Login
        </Button>
      </div>
    </div>
  )
}
