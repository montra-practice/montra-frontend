import { Button } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import styles from './index.scss'

export default () => {
  const navigate = useNavigate()
  return (
    <div className={styles.wrapper}>
      <h2>Let’s setup your account!</h2>
      <p>Account can be your bank, credit card or your wallet.</p>
      <Button
        color="primary"
        block
        size="large"
        onClick={() => navigate('/user-profile/account/add')}
      >
        Let's go
      </Button>
    </div>
  )
}
