import { Form, Button, Input, Checkbox } from 'antd-mobile'
import { useEffect } from 'react'
import { signUpUser } from '@/store/user/api'
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Sign Up'
  }, [])

  const onSubmit = async (values: IRequestUserSignUp) => {
    await signUpUser(values)
    navigate('/landing/verification')
  }

  return (
    <>
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
          name="name"
          rules={[{ required: true, message: 'Name cannot empty' }]}
        >
          <Input placeholder="Name" data-testid="name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Email cannot empty' }]}
        >
          <Input placeholder="Email" data-testid="email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Password cannot empty' }]}
        >
          <Input
            type="password"
            placeholder="Password"
            data-testid="password"
          />
        </Form.Item>
        <Form.Item name="agreePolicy">
          <Checkbox data-testid="agreePolicy" >
            By signing up, you agree to the
            <span>Terms of Service and Privacy Policy</span>
          </Checkbox>

        </Form.Item>
      </Form>
    </>
  )
}
