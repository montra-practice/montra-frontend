import { render, screen } from '@testing-library/react'
import Verification from './index'
import { MemoryRouter as Router } from 'react-router-dom'

describe('test Verification component', () => {
  test('Verification component should render', () => {
    const state = { email: 'test@mail.com' }
    render(
      <Router initialEntries={[{ state }]}>
        <Verification />
      </Router>
    )
    expect(screen.getByText('Enter your Verification Code')).toBeInTheDocument()
    expect(screen.getByText(/test@mail.com/i)).toBeInTheDocument()
  })
})
