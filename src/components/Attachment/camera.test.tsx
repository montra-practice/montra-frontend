import { screen, render, fireEvent } from '@testing-library/react'
import Camera from './camera'
import deviceMock from './deviceMock'

const mockData = {
  onBack: jest.fn(),
  onComplete: jest.fn(),
}

const mockDrawImage = () => {
  const canvas = screen.getByRole('canvas') as HTMLCanvasElement
  const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
  ctx.drawImage = jest.fn()

  return ctx
}

describe('Test Camera Page', () => {
  it('Render Camera', () => {
    deviceMock()
    render(<Camera {...mockData} />)
    expect(screen.getByRole('video')).toBeInTheDocument()
    expect(screen.getByAltText('start icon')).toBeInTheDocument()
  })

  it('Take a photo', () => {
    deviceMock()
    render(<Camera {...mockData} />)
    const ctx = mockDrawImage()
    fireEvent.click(screen.getByAltText('start icon'))
    expect(ctx.drawImage).toBeCalled()
  })

  it('On Back', () => {
    deviceMock()
    render(<Camera {...mockData} />)
    fireEvent.click(screen.getByRole('back'))
    expect(mockData.onBack).toBeCalled()
  })

  it('On Complete', () => {
    deviceMock()
    render(<Camera {...mockData} />)
    mockDrawImage()
    fireEvent.click(screen.getByAltText('start icon'))
    fireEvent.click(screen.getByRole('complete'))
    expect(mockData.onComplete).toBeCalled()
  })
})
