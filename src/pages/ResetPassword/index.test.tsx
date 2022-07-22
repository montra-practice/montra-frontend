import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import ResetPassword from './index'
import { BASE_URL } from '@/store/request'
import React from 'react'

describe('test ResetPassword page', () => {
  let history: MemoryHistory

  const setup = () => {
    const mockValue = {
      newPassword: '123456',
      repeatPassword: '123456',
    }
    render(
      <Router location={history.location} navigator={history}>
        <ResetPassword />
      </Router>,
    )
    const newPasswordInput = within(
      screen.getByTestId('newPassword'),
    ).getByPlaceholderText('New Password') as Element
    const repeatPasswordInput = within(
      screen.getByTestId('repeatPassword'),
    ).getByPlaceholderText('Retype new password') as Element

    return {
      newPasswordInput,
      repeatPasswordInput,
      mockValue,
    }
  }

  const server = setupServer(
    rest.post(`${BASE_URL}/user/reset-password`, (req, res, ctx) => {
      return res(ctx.status(201), ctx.json({}))
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
    setup()

    expect(document.title).toBe('Reset Password')
    expect(screen.getByTestId('newPassword')).toBeInTheDocument()
    expect(screen.getByTestId('repeatPassword')).toBeInTheDocument()
    expect(screen.getByTestId('continue')).toBeInTheDocument()
  })

  test('all fields should be filled when user change values', async () => {
    const { newPasswordInput, repeatPasswordInput, mockValue } = setup()

    await userEvent.type(newPasswordInput, mockValue.newPassword)
    await userEvent.type(repeatPasswordInput, mockValue.repeatPassword)

    expect(newPasswordInput).toHaveValue(mockValue.newPassword)
    expect(repeatPasswordInput).toHaveValue(mockValue.repeatPassword)
  })

  test('submit sign up should jump to verification', async () => {
    const { newPasswordInput, repeatPasswordInput, mockValue } = setup()

    await userEvent.type(newPasswordInput, mockValue.newPassword)
    await userEvent.type(repeatPasswordInput, mockValue.repeatPassword)

    await userEvent.click(screen.getByTestId('continue'))

    await waitFor(() => {
      expect(history.location.pathname).toBe('/landing/login')
    })
  })
})
