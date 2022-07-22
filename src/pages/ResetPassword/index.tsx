import { Form, Button, Input, Toast } from 'antd-mobile'
import { useEffect } from 'react'
import { resetPassword } from '@/store/user/api'
import { useNavigate } from 'react-router-dom'
import styles from './index.scss'

export default () => {
  const navigate = useNavigate()
  const [form] = Form.useForm()

  useEffect(() => {
    document.title = 'Reset Password'
  }, [])

  const validPassword = (_: any, value: string) => {
    const newPasswordValue = form.getFieldValue('newPassword')

    if (!value) {
      return Promise.reject('Retype Password cannot empty')
    } else if (value !== newPasswordValue) {
      return Promise.reject('Retype Password should be same with New Password')
    }

    return Promise.resolve()
  }

  const onSubmit = async (values: IResetPassword) => {
    resetPassword({
      newPassword: values.newPassword,
      repeatPassword: values.repeatPassword,
    }).then(() => {
      Toast.show({
        icon: 'success',
        content: 'Reset Successfully',
      })
      navigate('/landing/login')
    })
  }

  return (
    <div className={styles.wrapper}>
      <Form
        layout="horizontal"
        form={form}
        onFinish={onSubmit}
        footer={
          <Button
            block
            type="submit"
            color="primary"
            size="large"
            data-testid="continue"
          >
            Continue
          </Button>
        }
      >
        <Form.Item
          name="newPassword"
          rules={[{ required: true, message: 'Password cannot empty' }]}
        >
          <Input
            type="password"
            placeholder="New Password"
            data-testid="newPassword"
          />
        </Form.Item>
        <Form.Item name="repeatPassword" rules={[{ validator: validPassword }]}>
          <Input
            type="password"
            placeholder="Retype new password"
            data-testid="repeatPassword"
          />
        </Form.Item>
      </Form>
    </div>
  )
}
