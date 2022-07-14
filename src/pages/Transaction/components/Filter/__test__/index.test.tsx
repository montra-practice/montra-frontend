import { screen, render, fireEvent } from '@testing-library/react'
import Filter from '..'

describe('Filter component', () => {
  const mockProps = {
    visible: true,
    hideFilter: jest.fn(),
  }

  it('should filter UI', () => {
    render(<Filter {...mockProps} />)

    const filterMask = screen.getByTestId('filterMask')
    const restBtn = screen.getByRole('button', { name: /reset/i })

    expect(filterMask).toBeInTheDocument()
    expect(restBtn).toBeInTheDocument()
  })

  it('shuld hide filter UI after click the filter mask', () => {
    render(<Filter {...mockProps} />)

    const filterMask = screen.getByTestId('filterMask')

    fireEvent.click(filterMask)
    expect(mockProps.hideFilter.mock.calls[0][0]).toEqual(mockProps.visible)
  })
})
