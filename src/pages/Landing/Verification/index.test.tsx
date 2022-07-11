import { render, screen, waitFor } from '@testing-library/react'
import Verification, { ILocationState } from './index'
import { Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { BASE_URL } from '@/store/request'
import { createMemoryHistory, MemoryHistory } from 'history'

describe('test Verification component', () => {
  let state: ILocationState
  let history: MemoryHistory
  const server = setupServer(
    rest.post(`${BASE_URL}/user/verify`, (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(req.body))
    }),
  )

  const setup = () => {
    history.replace(history.location.pathname, state)
    render(
      <Router location={history.location} navigator={history}>
        <Verification />
      </Router>,
    )
  }

  beforeEach(() => {
    history = createMemoryHistory()
    state = { email: 'test@mail.com' }
  })

  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
  })

  afterAll(() => {
    server.close()
  })

  test('Verification component should render', () => {
    setup()

    expect(document.title).toBe('Verification')
    expect(screen.getByText('Enter your Verification Code')).toBeInTheDocument()
    expect(screen.getByText(/test@mail.com/i)).toBeInTheDocument()
  })

  test('enabled the verify button when user finished passcode', () => {
    setup()

    userEvent.type(screen.getByTestId('passcode'), '123456')

    expect(screen.getByTestId('verify')).toBeEnabled()
  })

  test('disabled the verify button when user not finished passcode', () => {
    setup()

    userEvent.type(screen.getByTestId('passcode'), '123')

    expect(screen.getByTestId('verify')).toBeDisabled()
  })

  test('navigate to Login page when user fire verify button', () => {
    setup()

    userEvent.type(screen.getByTestId('passcode'), '123456')
    userEvent.click(screen.getByTestId('verify'))

    return waitFor(() => {
      expect(history.location.pathname).toBe('/landing/login')
    })
  })
})
