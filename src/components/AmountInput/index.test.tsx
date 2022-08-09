import { screen, render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import AmountInput from '.'

const mockData = {
  handleAmount: jest.fn(),
}

describe('Test AmountInput', () => {
  it('Render AmountInput', () => {
    render(<AmountInput {...mockData} />)
    expect(screen.getByText('How much?')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('0')).toBeInTheDocument()
  })

  it('input amount available', () => {
    render(<AmountInput {...mockData} />)
    const amountInput = screen.getByPlaceholderText('0')
    userEvent.type(amountInput, '1')
    expect(amountInput).toHaveValue(1)

    amountInput.blur()
    expect(mockData.handleAmount).toBeCalledWith('1')
  })

  it('input amount unavailable', () => {
    render(<AmountInput {...mockData} />)
    const amountInput = screen.getByPlaceholderText('0')
    userEvent.type(amountInput, 'ab')
    expect(amountInput).toHaveValue(null)

    amountInput.blur()
    expect(mockData.handleAmount).toBeCalledWith('')
  })
})
