import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory, MemoryHistory } from 'history'
import ReportDetail from '@/pages/ReportDetail'

describe('test Common Ring Chart', () => {
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
    fireEvent.click(screen.getByTestId('pieChart'))
    expect(screen.getByTestId('ringBox')).toBeInTheDocument()
  })
})
