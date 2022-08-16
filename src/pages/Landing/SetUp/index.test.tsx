import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import SetUp from './index'

describe('test SetUp component', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/user-profile/account/add')
  })
  test('render SetUp', () => {
    render(
      <Router navigator={history} location={history.location}>
        <SetUp />
      </Router>,
    )

    expect(screen.getByText('Let’s setup your account!')).toBeInTheDocument()
  })

  test('jump to create account', () => {
    render(
      <Router navigator={history} location={history.location}>
        <SetUp />
      </Router>,
    )
    fireEvent.click(screen.getByRole('button'))
    expect(history.location.pathname).toEqual('/user-profile/account/add')
  })
})
