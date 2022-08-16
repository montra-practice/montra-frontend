import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory, MemoryHistory } from 'history'
import Transfer from '.'
import { Router } from 'react-router-dom'

describe('test Transfer page', () => {
  let history: MemoryHistory
  beforeEach(() => {
    history = createMemoryHistory()
    history.push('/home')
  })

  const renderTransfer = () => {
    return render(
      <Router navigator={history} location={history.location}>
        <Transfer />
      </Router>,
    )
  }

  it('renders static text', () => {
    renderTransfer()
    expect(screen.getByText('Transfer')).toBeInTheDocument()
    expect(screen.getByTestId('transferNav')).toBeInTheDocument()
  })

  it('goes back to home page when click the back button', () => {
    renderTransfer()
    fireEvent.click(screen.getByTestId('transferNav'))
    expect(history.location.pathname).toEqual('/home')
  })

  it('Switch From to To', () => {
    renderTransfer()
    const from = screen.getByPlaceholderText('from')
    const to = screen.getByPlaceholderText('to')
    fireEvent.input(from, { target: { value: 'From' } })
    expect(from).toHaveValue('From')

    fireEvent.input(to, { target: { value: 'To' } })
    expect(to).toHaveValue('To')

    fireEvent.click(screen.getByAltText('transfer icon'))
    expect(from).toHaveValue('To')
    expect(to).toHaveValue('From')
  })

  it('Input desc', () => {
    renderTransfer()
    const desc = screen.getByPlaceholderText('Describe')
    fireEvent.input(desc, { target: { value: 'This is a describe input' } })
    expect(desc).toHaveValue('This is a describe input')
  })
})
