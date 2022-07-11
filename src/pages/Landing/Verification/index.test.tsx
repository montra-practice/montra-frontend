import { render, screen, waitFor } from '@testing-library/react'
import Verification, { ILocationState } from './index'
import { MemoryRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { BASE_URL } from '@/store/request'

describe('test Verification component', () => {
  let state: ILocationState
  const server = setupServer(
    rest.post(`${BASE_URL}/user/verify`, (req, res, ctx) => {
      return res(ctx.status(201), ctx.json(req.body))
    }),
  )

  const setup = () => {
    render(
      <Router initialEntries={[{ state }]}>
        <Verification />
      </Router>,
    )
  }

  beforeEach(() => {
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

  test('navigate to Login page when user fire verify button', async () => {
    setup()

    userEvent.type(screen.getByTestId('passcode'), '123456')
    userEvent.click(screen.getByTestId('verify'))

    await waitFor(() => {
      expect(screen.getByText(/login/i)).toBeInTheDocument()
    })
  })
})
