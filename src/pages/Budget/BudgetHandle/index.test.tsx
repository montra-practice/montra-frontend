import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import BudgetHandle from './budget'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { BASE_URL } from '@/store/request'
import { IBudgetHandle } from './budget'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
describe('test budget handle page', () => {
  let history: MemoryHistory
  const handlers = [
    rest.post(`${BASE_URL}/budget/add`, (req, res, ctx) => {
      console.log('add', req)
      return res(ctx.status(200))
    }),
    rest.post(`${BASE_URL}/budget/update`, (req, res, ctx) => {
      console.log('update', req)
      return res(ctx.status(200))
    }),
  ]
  const server = setupServer(...handlers)
  beforeEach(() => {
    history = createMemoryHistory()
  })
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  const setUp = ({ type, data }: IBudgetHandle) => {
    render(
      <Router location={history.location} navigator={history}>
        <BudgetHandle type={type} data={data} />
      </Router>,
    )
  }
  test('should render add compoment correctly', async () => {
    setUp({ type: 'add' })
    expect(screen.getByText('Create Budget')).toBeInTheDocument()
    userEvent.type(screen.getByPlaceholderText('0'), '1000')
    expect(screen.getByPlaceholderText('0')).toHaveValue(1000)
    userEvent.click(screen.getByRole('header'))
    expect(screen.getByText(/shopping/i)).toBeInTheDocument()
    userEvent.click(screen.getAllByRole('option')[1])
    expect(screen.getByText(/food/i)).toBeInTheDocument()
    expect(screen.queryByRole('option')).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('switch'))
    expect(screen.getByTestId('slider')).toBeInTheDocument()
    userEvent.click(screen.getByText('Continue'))
    await waitFor(() => {
      expect(screen.getByText(/add success/i)).toBeInTheDocument()
    })
  })
  const mockData = {
    budgetId: 1,
    categoryId: '1',
    categoryName: 'Shopping',
    budgetTarget: 1000,
    realCost: 1200,
    receiveAlert: true,
    alertPercent: 80,
    bgColor: '#fff',
    warning: true,
    remain: 30,
    costPercent: 70,
  }
  test('should render edit page correctly', () => {
    setUp({ type: 'edit', data: mockData })
    expect(screen.getByText('Edit Budget')).toBeInTheDocument()
    const amountInput = screen.getByPlaceholderText('0')
    expect(amountInput).toHaveValue(1000)
    expect(screen.getByText(/shopping/i)).toBeInTheDocument()
    expect(screen.getByTestId('slider')).toBeInTheDocument()
  })
  test('should edit the page successfully', async () => {
    setUp({ type: 'edit', data: mockData })
    userEvent.type(screen.getByPlaceholderText('0'), '1200')
    userEvent.click(screen.getByRole('header'))
    userEvent.click(screen.getAllByRole('option')[1])
    expect(screen.getByText(/food/i)).toBeInTheDocument()
    expect(screen.queryByRole('option')).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('switch'))
    expect(screen.queryByTestId('slider')).not.toBeInTheDocument()
    userEvent.click(screen.getByText('Continue'))
    await waitFor(() => {
      expect(screen.getByText(/update success/i)).toBeInTheDocument()
    })
  })
})
