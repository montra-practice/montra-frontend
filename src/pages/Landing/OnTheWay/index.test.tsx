import OnTheWay from './index'
import { createMemoryHistory, MemoryHistory } from 'history'
import { render, screen, waitFor } from '@testing-library/react'
import { Router } from 'react-router-dom'
import userEvent from '@testing-library/user-event'

describe('test OnTheWay component', () => {
  let history: MemoryHistory
  const setup = () => {
    render(
      <Router location={history.location} navigator={history}>
        <OnTheWay />
      </Router>,
    )
  }

  beforeEach(() => {
    history = createMemoryHistory()
    history.replace(history.location.pathname, { email: 'test@mail.com' })
  })

  test('render component', () => {
    setup()

    expect(screen.getByText('Your email is on the way')).toBeInTheDocument()
    expect(screen.getByText('Back to Login')).toBeInTheDocument()
  })

  test('should navigate to login page when user fire on back to login button', () => {
    setup()

    userEvent.click(screen.getByText('Back to Login'))

    return waitFor(() => {
      expect(history.location.pathname).toBe('/landing/login')
    })
  })
})
