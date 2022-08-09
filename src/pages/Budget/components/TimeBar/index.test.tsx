import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { config } from 'react-transition-group'
import TimeBar from './index'
config.disabled = true

describe('test timebar', () => {
  const onselected = jest.fn()
  const mockMonth = {
    value: '5',
    label: 'june',
  }
  test('should render correctly', () => {
    render(<TimeBar onSelected={onselected} selectedMonth={mockMonth} />)
    expect(screen.getByText('june')).toBeInTheDocument()
  })
  test('should handle the month correctly', () => {
    render(<TimeBar onSelected={onselected} selectedMonth={mockMonth} />)
    const leftBtn = screen.getByTestId('left')
    const rightBtn = screen.getByTestId('right')
    userEvent.click(leftBtn)
    expect(onselected).toHaveBeenCalled()
    expect(screen.getByText('May')).toBeInTheDocument()
    userEvent.click(rightBtn)
    expect(screen.getByText('June')).toBeInTheDocument()
  })
})
