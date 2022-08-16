import { screen, render, fireEvent } from '@testing-library/react'
import Camera from './camera'
import deviceMock from './deviceMock'

const mockData = {
  onBack: jest.fn(),
  onComplete: jest.fn(),
}

const mockDrawImage = () => {
  const canvas = screen.getByTestId('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.drawImage = jest.fn()

  return ctx
}

describe('Test Camera Page', () => {
  beforeEach(() => {
    deviceMock()
  })
  it('Render Camera', () => {
    render(<Camera {...mockData} />)
    expect(screen.getByRole('application')).toBeInTheDocument()
    expect(screen.getByAltText('start icon')).toBeInTheDocument()
  })

  it('Take a photo', () => {
    render(<Camera {...mockData} />)
    const ctx = mockDrawImage()
    fireEvent.click(screen.getByAltText('start icon'))
    expect(ctx.drawImage).toBeCalled()
  })

  it('On Back', () => {
    render(<Camera {...mockData} />)
    fireEvent.click(screen.getByRole('back'))
    expect(mockData.onBack).toBeCalled()
  })

  it('On Complete', () => {
    render(<Camera {...mockData} />)
    mockDrawImage()
    fireEvent.click(screen.getByAltText('start icon'))
    fireEvent.click(screen.getByRole('complete'))
    expect(mockData.onComplete).toBeCalled()
  })
})
