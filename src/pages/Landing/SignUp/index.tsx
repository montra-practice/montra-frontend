import { Form, Button, Input, Checkbox } from 'antd-mobile'
import { useEffect, useState } from 'react'

export default () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreePolicy: false,
  })

  useEffect(() => {
    document.title = 'Sign Up'
  }, [])

  const onSubmit = (values: IRequestUserSignUp) => {
    setFormData(() => values)
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
          rules={[{ required: true, message: 'password cannot empty' }]}
        >
          <Input
            type="password"
            placeholder="Password"
            data-testid="password"
          />
        </Form.Item>
        <Form.Item name="agreePolicy">
          <Checkbox data-testid="agreePolicy" />
          By signing up, you agree to the
          <span>Terms of Service and Privacy Policy</span>
        </Form.Item>
      </Form>
    </>
  )
}
