import ForgotPassword from './index'
import { render, screen, waitFor, within } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { BASE_URL } from '@/store/request'
import React from 'react'
import userEvent from '@testing-library/user-event'

describe('test ForgotPassword component', () => {
  let history: MemoryHistory

  const setup = () => {
    const mockValue = {
      email: 'user@gmail.com',
    }
    const utils = render(
      <Router location={history.location} navigator={history}>
        <ForgotPassword />
      </Router>,
    )

    const emailInput = within(screen.getByTestId('email')).getByPlaceholderText(
      'Email',
    ) as Element

    return {
      emailInput,
      mockValue,
      ...utils,
    }
  }

  const server = setupServer(
    rest.post(`${BASE_URL}/user/forgot-password`, (req, res, ctx) => {
      return res(ctx.status(201), ctx.json({}))
    }),
  )

  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
  })

  beforeEach(() => {
    history = createMemoryHistory()
    // history.replace(history.location.pathname, { email: 'test@mail.com' })
  })

  afterAll(() => {
    server.close()
  })

  test('render component', () => {
    const { emailInput } = setup()

    expect(document.title).toBe('Forgot Password')
    expect(
      screen.getByText(
        'Enter your email and we’ll send you a link to reset your password.',
      ),
    ).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(screen.getByText('Continue')).toBeInTheDocument()
  })

  test('all fields should be filled when user change values', () => {
    const { emailInput, mockValue } = setup()

    userEvent.type(emailInput, mockValue.email)

    expect(emailInput).toHaveValue(mockValue.email)
  })

  test('click Continue should jump to on-the-way page', async () => {
    const { emailInput } = setup()

    userEvent.type(emailInput, 'Tom@email.com')

    userEvent.click(screen.getByText('Continue'))

    await waitFor(() => {
      expect(history.location.pathname).toBe('/landing/on-the-way')
    })
    await waitFor(() => {
      expect((history.location.state as any).email).toBe('Tom@email.com')
    })
  })
})
