import { Button, Form, Input } from 'antd-mobile'
import styles from './index.scss'
import { EMAIL_REGX } from '@/constants/base'
import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    document.title = 'Forgot Password'
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>Don’t worry.</p>
        Enter your email and we’ll send you a link to reset your password.
      </div>
      <Form
        layout="horizontal"
        footer={
          <Button block type="submit" color="primary" size="large">
            Continue
          </Button>
        }
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Email cannot empty' },
            {
              pattern: EMAIL_REGX,
              message: 'Please enter correct email address',
            },
          ]}
        >
          <Input placeholder="Email" data-testid="email" />
        </Form.Item>
      </Form>
    </div>
  )
}
