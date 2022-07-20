import AuthWrapper from './index'
import Home from '@/pages/Home'
import Landing from '@/pages/Landing'
import { render, screen } from '@testing-library/react'
import { Router, Routes } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import Token from '@/utils/token'

describe('test AuthWrapper component', () => {
  let history: MemoryHistory

  beforeEach(() => {
    history = createMemoryHistory()
    localStorage.clear()
  })

  test('render correct component when token exist', () => {
    const { setToken } = Token('token')
    setToken('fakeToken')

    render(
      <Router navigator={history} location={history.location}>
        <Routes>{AuthWrapper(<Home />, '/home')}</Routes>
      </Router>,
    )

    expect(screen.getByText('Account Balance')).toBeInTheDocument()
  })

  test('render correct component without token', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Routes>{AuthWrapper(<Home />, '/home')}</Routes>
      </Router>,
    )

    expect(screen.queryByText('Account Balance')).not.toBeInTheDocument()
  })

  test('user should see all landing pages even without token', () => {
    render(
      <Router navigator={history} location={history.location}>
        <Routes>{AuthWrapper(<Landing />, '/landing')}</Routes>
      </Router>,
    )

    expect(screen.getByText('Sign Up')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
  })
})
