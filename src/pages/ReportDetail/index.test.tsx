import { render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import ReportDetail from '.'
import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'

describe('test Financial Report Detail page', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
  })
  it('should render static text', () => {
    render(
      <Router location={history.location} navigator={history}>
        <ReportDetail />
      </Router>,
    )
    const lineBox = screen.getByTestId('lineBox')
    expect(screen.getByText('Financial Report')).toBeInTheDocument()
    expect(lineBox).toBeInTheDocument()
  })
})
