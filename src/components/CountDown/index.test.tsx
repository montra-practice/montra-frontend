import { render, screen, act } from '@testing-library/react'
import CountDown from './index'

describe('test CountDown component', () => {
  test('render count down time', () => {
    render(<CountDown minutes={60}/>)

    expect(screen.getByText('60:00')).toBeInTheDocument()
  })

  test('time should start down after 1 second',  () => {
    jest.useFakeTimers()
    render(<CountDown minutes={60}/>)

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('59:59')).toBeInTheDocument()
  })

  test('minutes should count down when second was zero', () => {
    jest.useFakeTimers()
    render(<CountDown minutes={1} seconds={1} />)
    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('01:00')).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(1000)
    })
    expect(screen.getByText('00:59')).toBeInTheDocument()
  })

  test('count down should be stop', () => {
    jest.useFakeTimers()
    render(<CountDown seconds={1} />)

    expect(screen.getByText('00:01')).toBeInTheDocument()

    act(() => {
      jest.advanceTimersByTime(2000)
    })
    expect(screen.getByText('00:00')).toBeInTheDocument()
  })
})
