export default (key: string, initialValue?: string) => {
  const getToken = () => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  }

  const setToken = (value: string) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  const removeToken = () => {
    localStorage.removeItem(key)
  }

  return { getToken, setToken, removeToken }
}
