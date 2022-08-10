import { screen, render, fireEvent } from '@testing-library/react'
import RemoveAlert from '.'

const mockData = {
  visible: true,
  onCancel: jest.fn(),
  onConfirm: jest.fn(),
}

const title = 'Remove this Transaction'
const content = 'Are you sure do you wanna remove this transaction?'
const getBtnByName = (name: string) => {
  return screen.getByRole('button', { name })
}

describe('Test RemoveAlert', () => {
  it('Render RemoveAlert', () => {
    render(<RemoveAlert {...mockData} />)

    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(content)).toBeInTheDocument()
    expect(getBtnByName('No')).toBeInTheDocument()
    expect(getBtnByName('Yes')).toBeInTheDocument()
  })

  it('on click button No', () => {
    render(<RemoveAlert {...mockData} />)
    fireEvent.click(getBtnByName('No'))
    expect(mockData.onCancel).toBeCalled()
  })

  it('on click button Yes', () => {
    render(<RemoveAlert {...mockData} />)
    fireEvent.click(getBtnByName('Yes'))
    expect(mockData.onConfirm).toBeCalled()
  })
})
