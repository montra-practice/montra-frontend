import { Route } from 'react-router'
import Landing from './index'
import SignUp from './SignUp'
import Login from './Login'

export default [
  <Route path="/landing" element={<Landing />} key="Landing" />,
  <Route path="/landing/sign-up" element={<SignUp />} key="SignUp" />,
  <Route path="/landing/login" element={<Login />} key="Login" />,
]
