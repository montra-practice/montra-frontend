import { render, screen } from '@testing-library/react'
import Verification, { ILocationState } from './index'
import { MemoryRouter as Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('test Verification component', () => {
  let state: ILocationState
  const setup = () => {
    render(
      <Router initialEntries={[{ state }]}>
        <Verification />
      </Router>
    )
  }

  beforeEach(() => {
    state = { email: 'test@mail.com' }
  })

  test('Verification component should render', () => {
    setup()

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
})
