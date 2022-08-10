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
    const filterTitle = screen.getByText('Filter Transaction')

    expect(filterMask).toBeInTheDocument()
    expect(filterTitle).toBeInTheDocument()
    expect(restBtn).toBeInTheDocument()
  })

  it('should hide filter UI after click the filter mask', () => {
    render(<Filter {...mockProps} />)

    const filterMask = screen.getByTestId('filterMask')

    fireEvent.click(filterMask)
    expect(mockProps.hideFilter.mock.calls[0][0]).toEqual(mockProps.visible)
  })

  it('should call mockProps.onApply/hideFilter when apply button is clicked', () => {
    const { container } = render(<Filter {...mockProps} />)

    /*eslint-disable*/
    const allSelectorItems =
      container.getElementsByClassName('adm-selector-item')
    const filterIncome = allSelectorItems[0] // filter-income-1
    const sortLowest = allSelectorItems[4] // sorter-lowest-2

    fireEvent.click(filterIncome)
    fireEvent.click(sortLowest)

    const applyBtn = screen.getByRole('button', { name: 'Apply' })
    fireEvent.click(applyBtn)

    expect(mockProps.onApply).toBeCalledWith({
      filter: [1],
      sorter: [2],
      cateType: [],
    })
    expect(mockProps.hideFilter).toBeCalled()
  })
})
