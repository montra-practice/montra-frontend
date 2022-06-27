import { useEffect } from 'react'

function SignUp() {
  useEffect(() => {
    document.title = 'Login'
  }, [])

  return <div>Login</div>
}

export default SignUp
