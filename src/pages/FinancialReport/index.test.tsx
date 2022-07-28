import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import FinancialReport from '.'
import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'

describe('test FinancialReport page', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
  })
  it('should render static text', () => {
    render(
      <Router location={history.location} navigator={history}>
        <FinancialReport />
      </Router>,
    )
    expect(screen.getAllByText('This Month').length).toBeGreaterThan(0)
  })
})
