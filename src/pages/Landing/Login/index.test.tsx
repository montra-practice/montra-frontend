import { render, screen } from '@testing-library/react'
import Login from './index'

describe('test Login page', () => {
  test('render form fields', () => {
    render(<Login />)

    expect(document.title).toBe('Login')
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})
