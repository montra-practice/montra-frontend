import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, PasscodeInput } from 'antd-mobile'
import CountDown from '@/components/CountDown'
import { verifyPasscode } from '@/store/user/api'
import styles from './index.scss'

export interface ILocationState {
  email: string
}

export default () => {
  const [passcode, setPasscode] = useState('')
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Verification'
  }, [])

  const onPasscodeChange = (value: string) => {
    if (value.length >= 6) {
      setPasscode(value)
    }
  }

  const onVerify = () => {
    verifyPasscode(passcode).then(() => {
      navigate('/landing/login')
    })
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
      <CountDown minutes={5} />
      <p className={styles.tips}>
        We send verification code to your email
        <span>{(location.state as ILocationState).email}.</span>
        You can check your inbox.
      </p>
      <p className={styles['dont-receive']}>
        I didn’t received the code? Send again
      </p>
      <Button
        color="primary"
        block
        size="large"
        disabled={!passcode}
        onClick={onVerify}
        data-testid="verify"
        type="button"
      >
        Verify
      </Button>
    </div>
  )
}
