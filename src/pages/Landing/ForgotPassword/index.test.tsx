import ForgotPassword from './index'
import { render, screen } from '@testing-library/react'

describe('test ForgotPassword component', () => {
  test('render component', () => {
    render(<ForgotPassword />)

    expect(
      screen.getByText(
        'Enter your email and we’ll send you a link to reset your password.',
      ),
    ).toBeInTheDocument()
  })
})
