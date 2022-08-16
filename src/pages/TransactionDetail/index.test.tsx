import { screen, render, waitFor } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import userEvent from '@testing-library/user-event'
import { Router } from 'react-router-dom'
import TransactionDetail from '.'

describe('Test Transaction Detail', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/transaction')
  })

  const renderTransDetail = () => {
    return render(
      <Router navigator={history} location={history.action}>
        <TransactionDetail />
      </Router>,
    )
  }
  it('render Transaction Detail', () => {
    renderTransDetail()
    expect(screen.getByText(/transaction detail/i)).toBeInTheDocument()
  })

  it('Click navbar back', () => {
    renderTransDetail()
    const nav = screen.getByText(/transaction detail/i)
    userEvent.click(nav)
    expect(history.location.pathname).toEqual('/transaction')
  })

  it('Click delete', async () => {
    renderTransDetail()
    const delIcon = screen.getByAltText('remove icon')
    userEvent.click(delIcon)
    await screen.findByText('Remove this Transaction')

    expect(screen.getByText('Remove this Transaction')).toBeInTheDocument()
    expect(
      screen.getByText('Are you sure do you wanna remove this transaction?'),
    ).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'No' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Yes' })).toBeInTheDocument()
  })

  it('Click edit', () => {
    renderTransDetail()
    const editBtn = screen.getByText('Edit')
    userEvent.click(editBtn)
    expect(history.location.pathname).toEqual('/expense')
  })
})
