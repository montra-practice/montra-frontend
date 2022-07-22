import React from 'react'
import { render, screen } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import Notification from '../index'
import { Router } from 'react-router-dom'

describe('test NotificationDetail component', () => {
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
  })
})
