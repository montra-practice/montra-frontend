import { screen, render } from '@testing-library/react'
import DropdownList from '.'
import { categoryTypes } from '@/constants/transaction'

describe('Test DropdownList component', () => {
  it('should render dropdownlist', () => {
    const mockProps = {
      title: 'TEST TITLE',
      onChange: jest.fn(),
      value: [''],
      options: categoryTypes,
    }
    render(<DropdownList {...mockProps} />)
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
  })
})
