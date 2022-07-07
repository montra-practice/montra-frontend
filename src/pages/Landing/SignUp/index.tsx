import { Form, Button, Input, Checkbox } from 'antd-mobile'
import { useEffect } from 'react'
import { signUpUser } from '@/store/user/api'
import { useNavigate } from 'react-router-dom'
import styles from './index.scss'

interface IFormFields extends IUser {
  agreePolicy: boolean
}

export default () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Sign Up'
  }, [])

  const onSubmit = async (values: IFormFields) => {
    await signUpUser({
      username: values.username,
      email: values.email,
      password: values.password
    })
    navigate('/landing/verification')
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
            Sign Up
          </Button>
        }
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Name cannot empty' }]}
        >
          <Input placeholder="Name" data-testid="name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Email cannot empty' },
            { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g, message: 'Please enter a valid email address' }
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
        <Form.Item
          className={styles.policy}
          name="agreePolicy"
          rules={[{required: true, message: 'Please agree the Policy'}]}
        >
          <Checkbox data-testid="agreePolicy">
            By signing up, you agree to the
            <span className={styles['policy-link']}>Terms of Service and Privacy Policy</span>
          </Checkbox>
        </Form.Item>
      </Form>

      <p className={styles.tip}>
        Already have an account?
        <a href="#/landing/login">&nbsp;Login</a>
      </p>
    </div>
  )
}
