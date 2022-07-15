import { screen, render } from '@testing-library/react'
import DropdownList from '.'
import { categoryTypes } from '@/constants/transaction'

describe('Test DropdownList component', () => {
  it('should render dropdownlist', () => {
    const mockTitle = 'TEST TITLE'
    render(<DropdownList title={mockTitle} options={categoryTypes} />)
    expect(screen.getByText(mockTitle)).toBeInTheDocument()
  })
})
