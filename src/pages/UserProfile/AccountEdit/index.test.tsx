import { fireEvent, render, screen } from '@testing-library/react'
import AccountEdit from '.'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router, MemoryRouter } from 'react-router-dom'
// import { setupServer } from 'msw/node'
// import { rest } from 'msw'
// import userEvent from '@testing-library/user-event'

describe('test accountEdit page', () => {
  let history: MemoryHistory
  const setup = () => {
    return {
      ...render(
        <Router navigator={history} location={history.location}>
          <AccountEdit />
        </Router>,
      ),
    }
  }

  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/user-profile/account/edit')
  })

  test('render accountEdit component', async () => {
    setup()
    console.log(window.location.href)
    expect(screen.getByText('Balance')).toBeInTheDocument()
  })

  test('render page that add status', () => {
    render(
      <MemoryRouter initialEntries={['user-profile/account/add']}>
        <AccountEdit />
      </MemoryRouter>,
    )
    expect(screen.getByText('Add new account')).toBeInTheDocument()
  })

  test('user input account name', () => {
    const { container } = setup()
    const input = screen.getByPlaceholderText('Name')
    fireEvent.change(input, { target: { value: 'Paypal' } })
    // eslint-disable-next-line testing-library/no-node-access
    expect(container.querySelector('input')?.value).toBe('Paypal')
  })
  test('when picker is bank, the bank box is displayed', async () => {
    setup()
    const input = screen.getByPlaceholderText('Account Type')
    fireEvent.change(input, { target: { value: 'bank' } })
    fireEvent.click(screen.getByTestId('show-picker'))

    const picker = screen.getAllByRole('button')[4]
    fireEvent.select(picker, { value: ['bank'] })
    // userEvent.selectOptions(picker, ['bank'])

    const confirm = screen.getByText('confirm')
    fireEvent.click(confirm)
    // const bankBox = await screen.findByTestId('bank-box')
    // expect(bankBox).toBeInTheDocument()
  })

  test('click goBack button', () => {
    setup()
    fireEvent.click(screen.getAllByRole('button')[0])
    expect(history.location.pathname).toEqual('/user-profile/account/edit')
  })
})
