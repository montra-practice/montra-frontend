import { Button, Form, Input } from 'antd-mobile'
import styles from './index.scss'
import { EMAIL_REGX } from '@/constants/base'
import { useEffect } from 'react'
import { forgotPassword } from '@/store/user/api'
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigator = useNavigate()
  useEffect(() => {
    document.title = 'Forgot Password'
  }, [])

  const onSubmit = (values: { email: string }) => {
    forgotPassword(values.email).then(() => {
      navigator('/landing/on-the-way', {
        state: { email: values.email },
      })
    })
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>Don’t worry.</p>
        Enter your email and we’ll send you a link to reset your password.
      </div>
      <Form
        layout="horizontal"
        onFinish={onSubmit}
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
