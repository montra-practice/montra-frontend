import { screen, render } from '@testing-library/react'
import Transaction from '.'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'

describe('test transaction page', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
  })
  it('should rend financial guide btn', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Transaction />
      </Router>,
    )

    expect(screen.getByText(/see you financial report/i)).toBeInTheDocument()
  })
})
