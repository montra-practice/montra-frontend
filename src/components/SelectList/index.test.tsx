import { screen, render } from '@testing-library/react'
import SelectList from '.'
import { selectOptions } from '@/constants/transaction'

const mockData = {
  arrowRight: true,
  selectedWithBorder: false,
  options: selectOptions,
}

describe('SelectList component', () => {
  it('should render SelectList header', () => {
    render(<SelectList {...mockData} />)
    expect(screen.getByTestId('arrow')).toBeInTheDocument()
  })
})
