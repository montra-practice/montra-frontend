import { Route } from 'react-router'
import Landing from './index'
import SignUp from './SignUp'
import Login from './Login'
import Verification from './Verification'
import SetUp from './SetUp'

export default [
  <Route path="/landing" element={<Landing />} key="Landing" />,
  <Route path="/landing/sign-up" element={<SignUp />} key="SignUp" />,
  <Route path="/landing/login" element={<Login />} key="Login" />,
  <Route
    path="/landing/verification"
    element={<Verification />}
    key="Verification"
  />,
  <Route path="/landing/setup" element={<SetUp />} key="SetUp" />,
]
