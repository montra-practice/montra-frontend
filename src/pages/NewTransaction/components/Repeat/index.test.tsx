import { screen, render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Repeat from '.'

const mockOnRepeat = jest.fn()

const expectTextInTheDom = (arr: Array<string>) => {
  arr.forEach((ele) => {
    expect(screen.getByText(ele)).toBeInTheDocument()
  })
}

const renderEditCard = async () => {
  render(<Repeat onRepeat={mockOnRepeat} />)
  userEvent.click(screen.getByRole('switch'))
  userEvent.click(screen.getByRole('button'))
  await screen.findByText('Start:')
}

const mockSelect = async (
  selectIndex: number,
  optionIndex: number,
  optionLabel: string,
) => {
  await renderEditCard()
  userEvent.click(screen.getAllByRole('header')[selectIndex])
  await waitFor(() => {
    screen.getByRole('option')
  })
  userEvent.click(screen.getAllByRole('option')[optionIndex])
  expect(screen.getByText(optionLabel)).toBeInTheDocument()
}

describe('Test Repeat Component', () => {
  it('Render Repeat Component', () => {
    render(<Repeat />)
    expectTextInTheDom(['Repeat', 'Repeat transaction'])
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })

  it('Switch Repeat On', () => {
    render(<Repeat />)
    userEvent.click(screen.getByRole('switch'))
    expectTextInTheDom([
      'Repeat transaction, set your own time',
      'Frequency',
      'EndAfter',
    ])
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('Click button Edit', async () => {
    await renderEditCard()
    expectTextInTheDom([
      'Start:',
      'Month:',
      'Date:',
      'Frequency:',
      'End After Times:',
      'End by:',
    ])
    expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument()
  })

  it('Select Month', () => {
    mockSelect(0, 2, 'March')
  })

  it('Select Date', () => {
    mockSelect(1, 2, '3')
  })

  it('Select Frequency', () => {
    mockSelect(2, 2, 'Year')
  })

  it('Select EndAfter', () => {
    mockSelect(3, 2, '2')
  })

  it('Click Mask', async () => {
    await renderEditCard()
    userEvent.click(screen.getByRole('button', { name: '遮罩层' }))
    expect(screen.queryByText('Start;')).not.toBeInTheDocument()
  })

  it('Click button Next', async () => {
    await renderEditCard()
    userEvent.click(screen.getByRole('button', { name: 'Next' }))
    expect(mockOnRepeat).toBeCalled()
    expect(screen.queryByText('Start;')).not.toBeInTheDocument()
  })
})
