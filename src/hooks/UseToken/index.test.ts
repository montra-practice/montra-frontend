import useToken from './index'
import { renderHook, act } from '@testing-library/react'

describe('test UseToken hook', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(),
        setItem: jest.fn(),
      },
      writable: true,
    })
  })

  test('setToken correct', () => {
    const {
      result: { current },
    } = renderHook(() => useToken('token'))
    const [, setToken] = current
    setToken('tokenValue')

    expect(window.localStorage.setItem).toHaveBeenCalledWith(
      'token',
      '"tokenValue"',
    )
  })

  test('get correct token', () => {
    const { result } = renderHook(() => useToken('token'))
    const [, setToken] = result.current
    act(() => {
      setToken('tokenValue')
    })
    // must use result.current to get token value
    expect(result.current[0]).toBe('tokenValue')
  })
})
