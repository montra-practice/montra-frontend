import { render, screen } from '@testing-library/react'
import UserProfile from './index'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { BASE_URL } from '@/store/request'
import userEvent from '@testing-library/user-event'

describe('test userProfile page', () => {
  let history: MemoryHistory
  const setup = () => {
    return {
      ...render(
        <Router navigator={history} location={history.location}>
          <UserProfile />
        </Router>,
      ),
    }
  }
  const server = setupServer(
    rest.get(`${BASE_URL}/userInfo`, (req, res, ctx) => {
      return res(
        ctx.status(201),
        ctx.json({ nickname: '1111', realName: '234', avatarUrl: 'xxx' }),
      )
    }),
  )

  beforeEach(() => {
    history = createMemoryHistory()
  })

  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
  })

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  test('render UserProfile component', async () => {
    setup()
    expect(screen.getByTestId('nickname')).toBeInTheDocument()
    expect(screen.getByTestId('realName')).toBeInTheDocument()
  })

  test('user-profile page title', () => {
    expect(document.title).toBe('User Profile')
  })

  //   test('click the user edit icon', () => {
  //     setup()
  //     userEvent.click(screen.getByText('edit-box'))
  //   })
  test('navigate to user edit info page when user click the edit icon', () => {
    setup()
    userEvent.click(screen.getByTestId('edit-box'))
    expect(history.location.pathname).toBe('/user-profile/edit')
  })

  test('navigate to user porfiles account page', () => {
    setup()
    userEvent.click(screen.getByText('Account'))
    expect(history.location.pathname).toBe('/user-profile/account')
  })

  test('navigate to user porfiles settings page', () => {
    setup()
    userEvent.click(screen.getByTestId('Settings'))
    expect(history.location.pathname).toBe('/user-profile/settings')
  })

  test('navigate to user porfiles export data page', () => {
    setup()
    userEvent.click(screen.getByTestId('Export Data'))
    expect(history.location.pathname).toBe('/user-profile/export-data')
  })
})
