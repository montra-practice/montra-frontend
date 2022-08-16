import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DropdownList from '.'
import { categoryTypes, SHOPPING } from '@/constants/transaction'

const mockProps = {
  title: 'TEST TITLE',
  onChange: jest.fn(),
  value: [''],
  options: categoryTypes,
}

describe('Test DropdownList component', () => {
  it('should render dropdownlist', () => {
    render(<DropdownList {...mockProps} />)
    expect(screen.getByText(mockProps.title)).toBeInTheDocument()
  })

  it('selectOptions', () => {
    const { container } = render(<DropdownList {...mockProps} />)
    userEvent.click(screen.getByTestId('checkPanel'))
    expect(screen.getByText(SHOPPING)).toBeInTheDocument()

    /*eslint-disable-next-line*/
    const option = container.getElementsByClassName('adm-check-list-item')[0]
    userEvent.click(option)
    expect(mockProps.onChange).toBeCalled()
  })
})
