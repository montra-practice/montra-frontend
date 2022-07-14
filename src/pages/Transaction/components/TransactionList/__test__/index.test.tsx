import { screen, render } from '@testing-library/react'
import TransactionList from '..'
import { SUBSCRIPTION } from '@/constants/transaction'

const mockData = {
  date: 'today',
  list: [
    {
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
    render(<TransactionList {...mockData} />)
    expect(screen.getByText(SUBSCRIPTION)).toBeInTheDocument()
  })
})
