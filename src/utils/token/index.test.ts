import Token from './index'

describe('test UseToken hook', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('setToken correct', () => {
    const { getToken, setToken } = Token('token')
    setToken('tokenValue')

    expect(getToken()).toBe('tokenValue')
  })

  test('get correct token when user set new token', () => {
    const { getToken, setToken } = Token('token', 'initial')

    expect(getToken()).toBe('initial')

    setToken('token1')

    expect(getToken()).toBe('token1')
  })

  test('remove localStorage when user fire on removeToken', () => {
    const { getToken, setToken, removeToken } = Token('token')

    setToken('token2')

    expect(getToken()).toBe('token2')

    removeToken()

    expect(getToken()).toBe(undefined)
  })
})
