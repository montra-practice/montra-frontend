import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import Landing from './index'

describe('test Landing page', () => {
  test('renders swipe default title', () => {
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

  test('go to sign up page when user click Sign Up button', () => {
    const history = createMemoryHistory()
    render(
      <Router location={history.location} navigator={history}>
        <Landing />
      </Router>,
    )

    fireEvent.click(screen.getByText('Sign Up'))

    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()
  })
})
