import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import Budget from '.'
import { Router } from 'react-router-dom'

describe('test Budget page', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/home')
  })

  it('renders static text', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Budget />
      </Router>,
    )
    expect(screen.getByText('Budget')).toBeInTheDocument()
    //expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('goes back to home page when click the back button', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Budget />
      </Router>,
    )
    // eslint-disable-next-line testing-library/no-node-access
    fireEvent.click(screen.getByRole('button').firstElementChild!)
    expect(history.location.pathname).toEqual('/home')
  })
})
