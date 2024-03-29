import { screen, render, fireEvent } from '@testing-library/react'
import Transaction from '.'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'

describe('test transaction page', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/financial-report/1')
  })

  const renderTransaction = () => {
    return render(
      <Router location={history.location} navigator={history}>
        <Transaction />
      </Router>,
    )
  }
  it('should rend financial guide btn', () => {
    renderTransaction()
    expect(screen.getByText(/see you financial report/i)).toBeInTheDocument()
  })

  it('jump to financial report page', () => {
    renderTransaction()
    fireEvent.click(screen.getByText(/see you financial report/i))
    expect(history.location.pathname).toEqual('/financial-report')
  })
  it('jump to transaction detail on clicking item', () => {
    renderTransaction()
    fireEvent.click(screen.getAllByAltText('category type img')[0])
    expect(history.location.pathname).toEqual('/transaction_detail/121213133')
  })

  it('Click filter btn', () => {
    renderTransaction()
    fireEvent.click(screen.getByAltText('filter icon'))
    expect(screen.getByTestId('filterMask')).toBeInTheDocument()
  })
})
