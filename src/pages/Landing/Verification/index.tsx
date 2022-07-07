import { useLocation } from 'react-router-dom'
import CountDown from '@/components/CountDown'
import { Button } from 'antd-mobile'
import styles from './index.scss'
import React from 'react'

interface ILocationState {
  email: string
}

export default () => {
  const location = useLocation()

  return (
    <div className={styles.wrapper}>
      <h2>Enter your Verification Code</h2>
      <div className={styles.code}>Code</div>
      <CountDown minutes={5}/>
      <p className={styles.tips}>
        We send verification code to your
        email
        <span>{(location.state as ILocationState).email}.</span>
        You can check your inbox.
      </p>
      <p className={styles['dont-receive']}>I didn’t received the code? Send again</p>
      <Button color="primary" block size="large">Verify</Button>
    </div>
  )
}
