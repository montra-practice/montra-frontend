import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import { Router } from 'react-router-dom'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Budget from '.'
import { BASE_URL } from '@/store/request'
import userEvent from '@testing-library/user-event'
import { createMemoryHistory, MemoryHistory } from 'history'

describe('test Budget page', () => {
  let history: MemoryHistory
  const server = setupServer(
    rest.get(`${BASE_URL}/budget/list`, (req, res, ctx) => {
      return res(ctx.json([{
        budgetId: 1,
        categoryId: '1',
        categoryName: 'Shopping',
        budgetTarget: 1000,
        realCost: 1200,
      }]
      ))
    })
  )
  const setUp = () => {
    render(
      <Router location={history.location} navigator={history}>
        <Budget />
      </Router>,
    )
  }
  beforeEach(() => {
    history = createMemoryHistory()
  })
  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
  test('should render budget lists correctly', async () => {
    setUp()
    await screen.findByText('Shopping')
    expect(screen.getByText('You’ve exceed the limit!')).toBeInTheDocument()
  })
  test('should render null list correctlly', async () => {
    server.use(
      rest.get(`${BASE_URL}/budget/list`, (req, res, ctx) => {
        return res(ctx.json([]))
      })
    )
    setUp()
    await waitFor(() => {
      expect(screen.getByText(/You don’t have a budget/i)).toBeInTheDocument()
    })
  })
  test('should jump to createBudegt page when click create button', async () => {
    setUp()
    const button = screen.getByText(/create/i)
    expect(button).toBeInTheDocument()
    await userEvent.click(button)
    await waitFor(() => {
      expect(history.location.pathname).toBe('/budget/new')
    })
  })
  test('should jump to detail page when click budget item', async () => {
    setUp()
    const item = await screen.findByTestId('budget-item')
    expect(item).toBeInTheDocument()
    await userEvent.click(item)
    await waitFor(() => {
      expect(history.location.pathname).toBe('/budget/detail')
    })
  })
})
