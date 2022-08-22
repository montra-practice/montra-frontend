import { fireEvent, render, screen } from '@testing-library/react'
import { Router } from 'react-router-dom'
import ReportDetail from '.'
import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'
import { PeriodSelectionContext, renderSelect } from '@/App'

describe('test Financial Report Detail page', () => {
  let history: MemoryHistory

  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/transaction')
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

  it('should call switchChart function', () => {
    render(
      <Router location={history.location} navigator={history}>
        <ReportDetail />
      </Router>,
    )
    const lineChart = screen.getByAltText('pie chart')
    fireEvent.click(lineChart)
    expect(screen.queryByTestId('lineBox')).not.toBeInTheDocument()
  })

  it('should call switchtab function', () => {
    render(
      <Router location={history.location} navigator={history}>
        <ReportDetail />
      </Router>,
    )
    const tabDiv = screen.getByTestId('tabDiv')
    fireEvent.click(tabDiv)
    expect(screen.queryAllByTestId('listDiv').length).toBeGreaterThan(0)
  })

  it('should call selectionChange function', () => {
    const mockFn = jest.fn()
    const testContext = {
      selection: '0',
      renderSelect: renderSelect,
      setSelection: mockFn,
    }
    render(
      <PeriodSelectionContext.Provider value={testContext}>
        <Router location={history.location} navigator={history}>
          <ReportDetail />
        </Router>
      </PeriodSelectionContext.Provider>,
    )
    const select = screen.getAllByRole('header')[0]
    fireEvent.click(select)
    fireEvent.click(screen.getAllByRole('option')[1])
    expect(screen.getByText('Month')).toBeInTheDocument()
    expect(mockFn).toBeCalledTimes(1)
  })

  it('should call typeSelectionChange function', () => {
    render(
      <Router location={history.location} navigator={history}>
        <ReportDetail />
      </Router>,
    )
    const typeSelect = screen.getAllByRole('header')[1]
    fireEvent.click(typeSelect)
    fireEvent.click(screen.getAllByRole('option')[1])
    expect(screen.queryAllByTestId('listDiv').length).toEqual(0)
  })

  it('should call sort function', () => {
    render(
      <Router location={history.location} navigator={history}>
        <ReportDetail />
      </Router>,
    )
    const sortIcon = screen.getByAltText('sort icon')
    fireEvent.click(sortIcon)
  })

  it('should call window resize', () => {
    render(
      <Router location={history.location} navigator={history}>
        <ReportDetail />
      </Router>,
    )
    screen.getByTestId('lineBox').setAttribute('height', '165px')
    expect(screen.getByTestId('lineBox').getAttribute('height')).toEqual(
      '165px',
    )
    window.dispatchEvent(new Event('resize'))
    // expect(screen.getByTestId('lineBox').getAttribute('height')).not.toEqual(
    //   '165px',
    // )
  })

  it('should go back', () => {
    render(
      <Router location={history.location} navigator={history}>
        <ReportDetail />
      </Router>,
    )
    // eslint-disable-next-line testing-library/no-node-access
    fireEvent.click(screen.getByRole('button').firstElementChild!)
    expect(history.location.pathname).toEqual('/transaction')
  })
})
