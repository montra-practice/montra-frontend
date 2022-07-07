import { useEffect } from 'react'

export default () => {
  useEffect(() => {
    document.title = 'Login'
  }, [])

  return <div>Login</div>
}
