import { screen, render, fireEvent } from '@testing-library/react'
import Filter from '.'
const initFilterItems = { filter: [], sorter: [], cateType: [] }

describe('Filter component', () => {
  const mockProps = {
    visible: true,
    hideFilter: jest.fn(),
    onApply: jest.fn(),
    defaultValue: initFilterItems,
  }

  it('should filter UI', () => {
    render(<Filter {...mockProps} />)

    const filterMask = screen.getByTestId('filterMask')
    const restBtn = screen.getByRole('button', { name: /reset/i })

    expect(filterMask).toBeInTheDocument()
    expect(restBtn).toBeInTheDocument()
  })

  it('should hide filter UI after click the filter mask', () => {
    render(<Filter {...mockProps} />)

    const filterMask = screen.getByTestId('filterMask')

    fireEvent.click(filterMask)
    expect(mockProps.hideFilter.mock.calls[0][0]).toEqual(mockProps.visible)
  })
})
