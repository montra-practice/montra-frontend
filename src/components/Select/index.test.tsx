import { screen, render } from '@testing-library/react'
import Select from '.'
import { selectOptions } from '@/constants/transaction'

const mockData = {
  selectedWithBorder: false,
  options: selectOptions,
}

describe('Select component', () => {
  it('should render Select header', () => {
    render(<Select {...mockData} />)
    expect(screen.getByTestId('arrow')).toBeInTheDocument()
  })
})
