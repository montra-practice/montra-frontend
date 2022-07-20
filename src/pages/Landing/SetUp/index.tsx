import { Button } from 'antd-mobile'
import styles from './index.scss'

export default () => {
  return (
    <div className={styles.wrapper}>
      <h2>Let’s setup your account!</h2>
      <p>Account can be your bank, credit card or your wallet.</p>
      <Button color="primary" block size="large">
        Let's go
      </Button>
    </div>
  )
}
