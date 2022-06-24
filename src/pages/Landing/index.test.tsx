import React from 'react'
import { render, screen } from '@testing-library/react'
import Landing from './index'

describe('Landing', () => {
  test('renders title', () => {
    render(<Landing />)
    const textElement = screen.getByText(/gain total control of your money/i)
    expect(textElement).toBeInTheDocument()
  })

  test('renders sign up & login buttons', () => {
    render(<Landing />)
    const signUpElement = screen.getByRole('button', { name: 'Sign Up' })
    const loginElement = screen.getByRole('button', { name: 'Login' })

    expect(signUpElement).toBeInTheDocument()
    expect(loginElement).toBeInTheDocument()
  })
})
