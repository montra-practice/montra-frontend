import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, Input } from 'antd-mobile'
import styles from './index.scss'

export default () => {
  const navigate = useNavigate()
  useEffect(() => {
    document.title = 'Login'
  }, [])

  const onSubmit = (values: Partial<IUser>) => {
    navigate('/landing/setup')
  }

  return (
    <div className={styles.wrapper}>
      <Form
        layout="horizontal"
        onFinish={onSubmit}
        footer={
          <Button
            block
            type="submit"
            color="primary"
            size="large"
            data-testid="submit-button"
          >
            Login
          </Button>
        }
      >
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Email cannot empty' },
            {
              pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g,
              message: 'Please enter a valid email address',
            },
          ]}
        >
          <Input placeholder="Email" data-testid="email" />
        </Form.Item>
        <Form.Item
          className={styles.password}
          name="password"
          rules={[{ required: true, message: 'Password cannot empty' }]}
        >
          <Input
            type="password"
            placeholder="Password"
            data-testid="password"
          />
        </Form.Item>
      </Form>
      <div className={styles['other-operation']}>
        <p>Forgot Password?</p>
        <p className={styles['sign-up']}>
          Don’t have an account yet? <span>Sign Up</span>
        </p>
      </div>
    </div>
  )
}
