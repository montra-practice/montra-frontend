import { Form, Button, Input, Checkbox } from 'antd-mobile'
import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    document.title = 'Sign Up'
  }, [])

  const onSubmit = (values: IRequestUserSignUp) => {
    console.log(values)
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
            data-testid="submit"
          >
            Sign Up
          </Button>
        }
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: 'Name cannot empty' }]}
          noStyle
        >
          <Input onChange={console.log} placeholder="Name" data-testid="name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Email cannot empty' }]}
          noStyle
        >
          <Input
            onChange={console.log}
            placeholder="Email"
            data-testid="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'password cannot empty' }]}
          noStyle
        >
          <Input
            onChange={console.log}
            type="password"
            placeholder="Password"
            data-testid="password"
          />
        </Form.Item>
        <Form.Item
          name="agreePolicy"
          rules={[
            {
              required: true,
              message: 'please agree teams of service and privacy policy',
            },
          ]}
          noStyle
        >
          <Checkbox onChange={console.log} />
          By signing up, you agree to the
          <span>Terms of Service and Privacy Policy</span>
        </Form.Item>
      </Form>
    </>
  )
}
