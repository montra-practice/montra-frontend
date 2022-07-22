import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Select from '.'
import { MonthEnglish } from '@/constants/base'

describe('test Select component', () => {
  it('renders select', () => {
    render(<Select options={[]} defaultValue={''} />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('shows option when click the header', () => {
    render(
      <Select
        options={MonthEnglish}
        defaultValue={new Date().getMonth() + ''}
      />,
    )
    fireEvent.click(screen.getByTestId('header'))
    expect(screen.getByText('January')).toBeInTheDocument()
    fireEvent.click(screen.getByText('January'))
  })
})
