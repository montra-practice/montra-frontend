import { screen, render, fireEvent } from '@testing-library/react'
import Camera from './camera'
import deviceMock from './deviceMock'

const mockData = {
  onBack: jest.fn(),
  onComplete: jest.fn(),
}

describe('Test Camera Page', () => {
  it('Render Camera', () => {
    deviceMock()
    render(<Camera {...mockData} />)
    expect(screen.getByRole('video')).toBeInTheDocument()
    expect(screen.getByAltText('start icon')).toBeInTheDocument()
  })

  // it('Take a photo', () => {
  //   deviceMock()
  //   render(<Camera {...mockData} />)
  //   fireEvent.click(screen.getByAltText('start icon'))
  // })

  it('On Back', () => {
    deviceMock()
    render(<Camera {...mockData} />)
    fireEvent.click(screen.getByRole('back'))
    expect(mockData.onBack).toBeCalled()
  })

  // it('On Complete', () => {
  //   deviceMock()
  //   render(<Camera {...mockData} />)
  //   fireEvent.click(screen.getByRole('complete'))
  //   expect(mockData.onComplete).toBeCalled()
  // })
})
