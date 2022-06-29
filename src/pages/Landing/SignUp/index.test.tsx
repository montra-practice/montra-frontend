import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import SignUp from './index'
import { act } from 'react-dom/test-utils'
import React from 'react'

describe('test Sign Up page', () => {
  const setup = () => {
    const mockValue = {
      name: 'userName',
      email: 'user@gmail.com',
      password: '123456',
    }
    const ref = React.createRef()
    const utils = render(<SignUp ref={ref} />)
    const nameInput = utils
      .getByTestId('name')
      .querySelector('input') as Element
    const emailInput = utils
      .getByTestId('email')
      .querySelector('input') as Element
    const passwordInput = utils
      .getByTestId('password')
      .querySelector('input') as Element
    const agreePolicyInput = utils
      .getByTestId('agreePolicy')
      .querySelector('input') as Element

    return {
      nameInput,
      emailInput,
      passwordInput,
      agreePolicyInput,
      mockValue,
      ref,
      ...utils,
    }
  }

  afterEach(() => {})

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

  test('submit with correct form values', async () => {
    // const onSubmit = jest.fn()
    const { nameInput, emailInput, passwordInput, agreePolicyInput, ref } =
      setup()

    await act(async () => {
      await userEvent.type(nameInput, 'Tom')
      await userEvent.type(emailInput, 'Tom@email.com')
      await userEvent.type(passwordInput, '123456')
      await userEvent.click(agreePolicyInput)

      await userEvent.click(screen.getByTestId('submit-button'))
    })

    expect(ref.onSubmit).toHaveBeenCalledWith({
      name: 'Tom',
      email: 'Tom@email.com',
      password: '123456',
      agreePolicy: true,
    })
  })
})
