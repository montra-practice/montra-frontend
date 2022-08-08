import { render, screen, waitFor } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { setupServer } from 'msw/node'
import { rest } from 'msw'
import Account from '.'
import { BASE_URL } from '@/store/request'
import userEvent from '@testing-library/user-event'

describe('test account page', () => {
  let history: MemoryHistory
  const server = setupServer(
    rest.get(`${BASE_URL}/account/info`, (req, res, ctx) => {
      const result = req.body
      console.log(result)
      return res(
        ctx.status(201),
        // ctx.json({ id: Date.now(), username, password, email }),
      )
    }),
  )
  const setup = () => {
    return {
      ...render(
        <Router navigator={history} location={history.location}>
          <Account />
        </Router>,
      ),
    }
  }

  beforeAll(() => {
    server.listen({ onUnhandledRequest: 'error' })
  })

  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/user-profile/account')
  })

  afterAll(() => {
    server.close()
  })

  test('render account page dom', async () => {
    setup()
    expect(document.title).toBe('Account')
    expect(screen.getByText(/Account Balance/i)).toBeInTheDocument()
    await waitFor(() => {
      expect(screen.getByText(/Wallet/i)).toBeInTheDocument()
    })
  })
  test('go back', () => {})
  test('show account balance value', () => {
    setup()
    const element = screen.getByTestId('account-balance')
    expect(element).not.toBeNull()
  })
  // test('navigate to wallet detail page when user click this button', async () => {
  //   setup()
  //   userEvent.click(await screen.findByTestId('wallet'))
  //   expect(history.location.pathname).toBe(
  //     '/user-profile/account/detail/wallet',
  //   )
  // })
  // test('navigate to chase detail page when user click this button', async () => {
  //   setup()
  //   userEvent.click(await screen.findByTestId('chase'))
  //   expect(history.location.pathname).toBe('/user-profile/account/detail/chase')
  // })
  // test('navigate to citi detail page when user click this button', async () => {
  //   setup()
  //   userEvent.click(await screen.findByTestId('citi'))
  //   expect(history.location.pathname).toBe('/user-profile/account/detail/citi')
  // })
  // test('navigate to paypal detail page when user click this button', async () => {
  //   setup()
  //   userEvent.click(await screen.findByTestId('paypal'))
  //   expect(history.location.pathname).toBe('/user-profile/account/detail/paypal')
  // })
  test('navigate to add new wallet page when user click this button', () => {
    setup()
    userEvent.click(screen.getByText('+ Add new wallet'))
    expect(history.location.pathname).toBe('/user-profile/account/add')
  })
})
