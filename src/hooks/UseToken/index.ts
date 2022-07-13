import { useState } from 'react'

export default (key: string, initialValue?: string) => {
  const [token, setTokenState] = useState(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setToken = (value: string) => {
    try {
      setTokenState(() => value)
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [token, setToken]
}
