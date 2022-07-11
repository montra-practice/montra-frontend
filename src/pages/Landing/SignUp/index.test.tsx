import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import SignUp from './index'
import { BASE_URL } from '@/store/request'
import React from 'react'

const setup = (history: MemoryHistory) => {
  const mockValue = {
    username: 'userName',
    email: 'user@gmail.com',
    password: '123456',
  }
  const utils = render(
    <Router location={history.location} navigator={history}>
      <SignUp />
    </Router>,
  )
  const nameInput = within(screen.getByTestId('username')).getByPlaceholderText(
    'Name',
  ) as Element
  const emailInput = within(screen.getByTestId('email')).getByPlaceholderText(
    'Email',
  ) as Element
  const passwordInput = within(
    screen.getByTestId('password'),
  ).getByPlaceholderText('Password') as Element
  const agreePolicyInput = within(screen.getByTestId('agreePolicy')).getByRole(
    'checkbox',
  ) as Element

  return {
    nameInput,
    emailInput,
    passwordInput,
    agreePolicyInput,
    mockValue,
    ...utils,
  }
}

describe('test Sign Up page', () => {
  let history: MemoryHistory
  const server = setupServer(
    rest.post(`${BASE_URL}/user/register`, (req, res, ctx) => {
      const { username, password, email } = req.body as IUser
      return res(
        ctx.status(201),
        ctx.json({ id: Date.now(), username, password, email }),
      )
    }),
  )

  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
  })

  beforeEach(() => {
    history = createMemoryHistory()
  })

  afterAll(() => {
    server.close()
  })

  test('render form fields', () => {
    setup(history)

    expect(document.title).toBe('Sign Up')
    expect(screen.getByTestId('username')).toBeInTheDocument()
    expect(screen.getByTestId('email')).toBeInTheDocument()
    expect(screen.getByTestId('password')).toBeInTheDocument()
    expect(screen.getByTestId('agreePolicy')).toBeInTheDocument()
    expect(screen.getByTestId('submit-button')).toBeInTheDocument()
  })

  test('all fields should be filled when user change values', async () => {
    const { nameInput, emailInput, passwordInput, mockValue } = setup(history)

    await userEvent.type(nameInput, 'userName')
    await userEvent.type(emailInput, 'user@gmail.com')
    await userEvent.type(passwordInput, '123456')

    expect(nameInput).toHaveValue(mockValue.username)
    expect(emailInput).toHaveValue(mockValue.email)
    expect(passwordInput).toHaveValue(mockValue.password)
  })

  test('submit sign up should jump to verification', async () => {
    const { nameInput, emailInput, passwordInput, agreePolicyInput } =
      setup(history)

    await userEvent.type(nameInput, 'Tom')
    await userEvent.type(emailInput, 'Tom@email.com')
    await userEvent.type(passwordInput, '123456')
    await userEvent.click(agreePolicyInput)

    await userEvent.click(screen.getByTestId('submit-button'))

    await waitFor(() => {
      expect(history.location.pathname).toBe('/landing/verification')
    })
  })
})
