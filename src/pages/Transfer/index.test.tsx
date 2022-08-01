import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import Transfer from '.'
import { Router } from 'react-router-dom'

describe('test Transfer page', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/home')
  })

  it('renders static text', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Transfer />
      </Router>,
    )
    expect(screen.getByText('Transfer')).toBeInTheDocument()
    expect(screen.getByTestId('transferNav')).toBeInTheDocument()
  })

  it('goes back to home page when click the back button', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Transfer />
      </Router>,
    )
    fireEvent.click(screen.getByTestId('transferNav'))
    expect(history.location.pathname).toEqual('/home')
  })
})
