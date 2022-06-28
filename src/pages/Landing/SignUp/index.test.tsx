import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignUp from './index'
import { act } from 'react-dom/test-utils'

describe('test Sign Up page', () => {
  const setup = () => {
    const mockValue = {
      name: 'userName',
      email: 'user@gmail.com',
      password: '123456',
    }
    const utils = render(<SignUp />)
    const nameInput = utils
      .getByTestId('name')
      .querySelector('input') as Element
    const emailInput = utils
      .getByTestId('email')
      .querySelector('input') as Element
    const passwordInput = utils
      .getByTestId('password')
      .querySelector('input') as Element
    return {
      nameInput,
      emailInput,
      passwordInput,
      mockValue,
      ...utils,
    }
  }

  test('render form fields', () => {
    render(<SignUp />)

    expect(document.title).toBe('Sign Up')
    expect(screen.getByTestId('name')).toBeInTheDocument()
    expect(screen.getByTestId('email')).toBeInTheDocument()
    expect(screen.getByTestId('password')).toBeInTheDocument()
    expect(screen.getByTestId('agreePolicy')).toBeInTheDocument()
    expect(screen.getByTestId('submit')).toBeInTheDocument()
  })

  test('all fields should be filled when user change values', async () => {
    const { nameInput, emailInput, passwordInput, mockValue } = setup()

    await act(async () => {
      await userEvent.type(nameInput, 'userName')
      await userEvent.type(emailInput, 'user@gmail.com')
      await userEvent.type(passwordInput, '123456')
    })

    expect(nameInput).toHaveValue(mockValue.name)
    expect(emailInput).toHaveValue(mockValue.email)
    expect(passwordInput).toHaveValue(mockValue.password)
  })

  // test('submit with correct form values', () => {
  //
  // })
})
