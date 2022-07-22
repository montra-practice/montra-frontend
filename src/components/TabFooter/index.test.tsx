import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import TabFooter from '@/components/TabFooter'

describe('test TabFooter component', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/home')
  })

  const tabs = ['/home', '/transaction', '/budget', '/user-profile']

  it('renders svg buttons', () => {
    render(
      <Router navigator={history} location={history.location}>
        <TabFooter />
      </Router>,
    )

    for (const tab of tabs) {
      const button = screen.getByTestId(tab)
      expect(button).toBeInTheDocument()
    }
  })

  it('goes to different pages when click tabs', () => {
    render(
      <Router navigator={history} location={history.location}>
        <TabFooter />
      </Router>,
    )
    for (const tab of tabs) {
      fireEvent.click(screen.getByTestId(tab))
      expect(history.location.pathname).toEqual(tab)
    }
  })

  it('displays add component when click add btn', () => {
    render(
      <Router navigator={history} location={history.location}>
        <TabFooter />
      </Router>,
    )
    fireEvent.click(screen.getByTestId('add'))
    fireEvent.click(screen.getByTestId('transfer'))
    expect(history.location.pathname).toEqual('/transfer')
  })

  it('hide add component when click blur', () => {
    render(
      <Router navigator={history} location={history.location}>
        <TabFooter />
      </Router>,
    )
    fireEvent.click(screen.getByTestId('add'))
    fireEvent.click(screen.getByTestId('addActive'))
    expect(screen.queryByTestId('transfer')).not.toBeInTheDocument()
  })

  // it('hide add component when click blur', () => {
  //   render(
  //     <Router navigator={history} location={history.location}>
  //       <TabFooter />
  //     </Router>,
  //   )
  //   fireEvent.click(screen.getByTestId('add'))
  //   fireEvent.click(screen.getByTestId('content'))
  //   expect(screen.queryByTestId('transfer')).not.toBeInTheDocument()
  // })
})
