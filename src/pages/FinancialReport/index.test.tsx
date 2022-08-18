import { fireEvent, render, screen } from '@testing-library/react'
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
    expect(screen.getByText(/Earned/i)).toBeInTheDocument()
  })

  it('should swip to different tab when tabChange', () => {
    render(
      <Router location={history.location} navigator={history}>
        <FinancialReport />
      </Router>,
    )
    fireEvent.click(screen.getByTestId('income'))
    expect(screen.getByText(/Earned/i)).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('quote'))
    expect(screen.getByText('See the full detail')).toBeInTheDocument()

    fireEvent.click(screen.getByText('See the full detail'))
    expect(history.location.pathname).toContain('report-detail')
  })
})
