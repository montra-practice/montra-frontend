import { render, screen } from '@testing-library/react'
import SignUp from './index'

describe('test Sign Up page', () => {
  test('render form fields', () => {
    render(<SignUp />)

    expect(document.title).toBe('Sign Up')
    expect(screen.getByText('Sign Up')).toBeInTheDocument()
  })
})
