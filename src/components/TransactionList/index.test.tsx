import { screen, render, fireEvent } from '@testing-library/react'
import TransactionList from '.'
import { SUBSCRIPTION } from '@/constants/transaction'
import { createMemoryHistory } from 'history'
import { BrowserRouter, Router } from 'react-router-dom'

const mockData = {
  date: 'today',
  list: [
    {
      transId: '121213',
      transType: 'INCOME',
      id: 3,
      type: SUBSCRIPTION,
      desc: 'test',
      money: '123',
      time: '3:00 PM',
    },
  ],
}

describe('TransactionList component', () => {
  it('should render one transaction item', () => {
    render(
      <BrowserRouter>
        <TransactionList {...mockData} />
      </BrowserRouter>,
    )
    expect(screen.getByText(SUBSCRIPTION)).toBeInTheDocument()
  })

  it('should navigate to TransactionDetail Page', async () => {
    const history = createMemoryHistory()
    render(
      <Router navigator={history} location={history.location}>
        <TransactionList {...mockData} />
      </Router>,
    )

    await fireEvent.click(screen.getByTestId('listDiv'))
    expect(history.location.pathname).toEqual('/transaction_detail/121213')
  })
})
