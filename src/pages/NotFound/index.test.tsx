import NotFound from './index'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('test NotFound component', () => {
  let history: MemoryHistory

  beforeEach(() => {
    history = createMemoryHistory()
  })

  test('render component', () => {
    render(
      <Router location={history.location} navigator={history}>
        <NotFound />
      </Router>,
    )

    expect(screen.getByText('Page Not Found')).toBeInTheDocument()
  })

  test('should back to home page', async () => {
    render(
      <Router location={history.location} navigator={history}>
        <NotFound />
      </Router>,
    )

    await userEvent.click(screen.getByText('Back to Home'))

    expect(history.location.pathname).toBe('/')
  })
})
