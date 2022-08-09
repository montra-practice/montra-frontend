import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Budget from '.'

describe('test Budget page', () => {
  it('renders static text', () => {
    render(
      <Router>
        <Budget />
      </Router>,
    )
    expect(
      screen.getByText(
        'You don’t have a budget. Let’s make one so you in control.',
      ),
    ).toBeInTheDocument()
  })
})
