import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import Home from '.'
import { Router } from 'react-router-dom'

describe('test Home page', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
  })

  it('renders static text', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Home />
      </Router>,
    )
    const lineBox = screen.getByTestId('lineBox')
    const textAccount = screen.getByText(/Account Balance/i)
    const textSpend = screen.getByText(/Spend Frequency/i)
    const textRecent = screen.getByText(/Recent Transaction/i)
    expect(textAccount).toBeInTheDocument()
    expect(textSpend).toBeInTheDocument()
    expect(textRecent).toBeInTheDocument()
    expect(lineBox).toBeInTheDocument()
  })

  it('goes to notification page when click the NotificationIcon', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Home />
      </Router>,
    )
    fireEvent.click(screen.getByTestId('notification'))
    expect(history.location.pathname).toEqual('/notification')
  })
})
