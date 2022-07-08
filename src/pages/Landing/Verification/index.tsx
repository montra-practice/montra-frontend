import { useLocation } from 'react-router-dom'
import CountDown from '@/components/CountDown'
import { Button, PasscodeInput } from 'antd-mobile'
import styles from './index.scss'
import React, { useState } from 'react'

export interface ILocationState {
  email: string
}

export default () => {
  const [passcode, setPasscode] = useState('')
  const location = useLocation()

  const onPasscodeChange = (value: string) => {
    if (value.length >= 6) {
      setPasscode(value)
    }
  }

  const onVerify = () => {

  }

  return (
    <div className={styles.wrapper}>
      <h2>Enter your Verification Code</h2>
      <PasscodeInput
        className={styles.passcode}
        length={6}
        plain
        onChange={onPasscodeChange}
        data-testid="passcode"
      />
      <CountDown minutes={5}/>
      <p className={styles.tips}>
        We send verification code to your
        email
        <span>{(location.state as ILocationState).email}.</span>
        You can check your inbox.
      </p>
      <p className={styles['dont-receive']}>I didn’t received the code? Send again</p>
      <Button
        color="primary"
        block
        size="large"
        disabled={!passcode}
        onClick={onVerify}
        data-testid="verify"
      >
        Verify
      </Button>
    </div>
  )
}
