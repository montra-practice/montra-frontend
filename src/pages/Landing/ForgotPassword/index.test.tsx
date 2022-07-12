import ForgotPassword from './index'
import { render, screen, within } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { BASE_URL } from '@/store/request'
import React from 'react'

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
    rest.post(`${BASE_URL}/user/forget-password`, (req, res, ctx) => {
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
})
