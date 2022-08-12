import BudgetDetail from '.'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { BASE_URL } from '@/store/request'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import { use } from 'echarts/core'

const mockDetail = {
  budgetId: 1,
  categoryId: '1',
  categoryName: 'Shopping',
  budgetTarget: 1000,
  realCost: 1200,
  bgColor: 'red',
  warning: true,
  remain: 0,
  costPercent: 100,
}
describe('test budgetDetail page', () => {
  let history: MemoryHistory
  const server = setupServer(
    rest.post(`${BASE_URL}/budget/delete`, (req, res, ctx) => {
      return res(ctx.status(200))
    }),
  )
  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/budget/detail', {
      state: mockDetail,
    })
  })
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  const setUp = () => {
    render(
      <Router location={history.location} navigator={history}>
        <BudgetDetail />
      </Router>,
    )
  }
  test('should render budgetDetail compoment correctly', () => {
    setUp()
    expect(screen.getByText('Detail Budget')).toBeInTheDocument()
    expect(screen.getByAltText('cate-icon')).toBeInTheDocument()
    expect(screen.getByText('You’ve exceed the limit')).toBeInTheDocument()
  })
  test('should popup remove alert correctly when click button', async () => {
    setUp()
    const deleteBtn = screen.getByTestId('delete')
    expect(deleteBtn).toBeInTheDocument()
    userEvent.click(deleteBtn)
    await waitFor(() => {
      expect(screen.getByText('Remove this budget?')).toBeInTheDocument()
    })
  })
  test('should navigate to detial page when click edit button', async () => {
    setUp()
    const editBtn = screen.getByRole('button', {
      name: 'Edit',
    })
    expect(editBtn).toBeInTheDocument()
    userEvent.click(editBtn)
    await waitFor(() => {
      expect(history.location.pathname).toBe('/budget/handle')
    })
  })
  test('should delete detail successfully', async () => {
    setUp()
    const deleteBtn = screen.getByTestId('delete')
    expect(deleteBtn).toBeInTheDocument()
    userEvent.click(deleteBtn)
    const confirmBtn = await screen.findByRole('button', { name: 'Yes' })
    //console.log('confirm',confirmBtn)
    userEvent.click(confirmBtn)
    await waitFor(() => {
      expect(screen.getByText('delete success!')).toBeInTheDocument()
    })
  })
})
