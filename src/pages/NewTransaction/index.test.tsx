import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import NewTransaction from '.'

describe('Test NewTransaction', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/income')
  })

  const renderNewTransaction = () => {
    return render(
      <Router navigator={history} location={history.location}>
        <NewTransaction />
      </Router>,
    )
  }

  it('render NewTransaction', () => {
    renderNewTransaction()
    expect(screen.getByText('How much?')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Continue' })).toBeInTheDocument()
  })

  it('Input amount', () => {
    renderNewTransaction()
    userEvent.type(screen.getByPlaceholderText('0'), '100')
    expect(screen.getByPlaceholderText('0')).toHaveValue(100)
  })

  it('Select Category Type', () => {
    renderNewTransaction()
    userEvent.click(screen.getAllByRole('header')[0])
    userEvent.click(screen.getAllByRole('option')[0])
    expect(screen.getByText('Salary')).toBeInTheDocument()
  })

  it('Input desc', () => {
    renderNewTransaction()
    userEvent.type(
      screen.getByPlaceholderText('Describe'),
      'This is describe box',
    )
    expect(screen.getByPlaceholderText('Describe')).toHaveValue(
      'This is describe box',
    )
  })

  it('Select wallet', () => {
    renderNewTransaction()
    userEvent.click(screen.getAllByRole('header')[1])
    userEvent.click(screen.getAllByRole('option')[0])
    expect(screen.getByText('Wallet')).toBeInTheDocument()
  })

  it('Click attachment', async () => {
    renderNewTransaction()
    userEvent.click(screen.getByRole('menubar'))
    await screen.findByRole('button', { name: '遮罩层' })
    expect(screen.getByAltText('camera icon')).toBeInTheDocument()
  })

  it('Click Repeat Switch', () => {
    renderNewTransaction()
    userEvent.click(screen.getByRole('switch'))
    expect(screen.getByText('Frequency')).toBeInTheDocument()
  })

  it('Click continue', () => {
    renderNewTransaction()
    userEvent.click(screen.getByText('Continue'))
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
})
