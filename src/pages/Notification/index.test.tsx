import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import Notification from '.'
import { Router } from 'react-router-dom'

describe('test Notification page', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/notification')
  })

  it('renders static text', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Notification />
      </Router>,
    )
    const textAccount = screen.getByText('Notification')
    expect(textAccount).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByTestId('moreBtn')).toBeInTheDocument()
  })

  it('goes back to home page when click the back button', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Notification />
      </Router>,
    )
    // console.log(screen.getByRole('button'))
    fireEvent.click(screen.getByRole('button'))
    expect(history.location.pathname).toEqual('/notification')
  })

  it('shows the action panel when click', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Notification />
      </Router>,
    )
    fireEvent.click(screen.getByTestId('moreBtn'))
    expect(screen.getByTestId('actionPanel')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Mark all read'))
    expect(screen.queryByTestId('actionPanel')).not.toBeInTheDocument()

    fireEvent.click(screen.getByTestId('moreBtn'))
    expect(screen.getByTestId('actionPanel')).toBeInTheDocument()

    fireEvent.click(screen.getByText('Remove all'))
    expect(screen.queryByTestId('actionPanel')).not.toBeInTheDocument()
  })

  it('renders no data', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Notification />
      </Router>,
    )
  })
})
