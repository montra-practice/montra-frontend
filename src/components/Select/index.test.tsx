import { screen, render, fireEvent } from '@testing-library/react'
import Select from '.'
import { selectOptions } from '@/constants/transaction'

const mockData = {
  options: selectOptions,
  selectedWithBorder: false,
  onSelect: jest.fn(),
  defaultValue: '2',
}

describe('Test Select component', () => {
  it('should render Select header with defaultValue', () => {
    render(<Select {...mockData} />)
    expect(screen.getByTestId('arrow')).toBeInTheDocument()
    expect(screen.getByText('Week')).toBeInTheDocument()
  })

  it('should show options on clicking header', () => {
    render(<Select {...mockData} />)
    fireEvent.click(screen.getByRole('header'))
    expect(screen.getByText('Month')).toBeInTheDocument()
  })

  it('should call mockData.onSelect on clicking option', () => {
    render(<Select {...mockData} />)
    fireEvent.click(screen.getByRole('header'))
    fireEvent.click(screen.getAllByRole('option')[0])
    expect(mockData.onSelect).toBeCalledWith({ value: '1', label: 'Month' })
  })

  it('should not show options while Select is disabled', () => {
    render(<Select {...mockData} disabled={true} />)
    const header = screen.getByRole('header')
    fireEvent.click(header)
    expect(screen.queryByText('Month')).not.toBeInTheDocument()
  })
})
