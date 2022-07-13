import { Route } from 'react-router'
import Landing from './index'
import SignUp from './SignUp'
import Login from './Login'
import Verification from './Verification'
import SetUp from './SetUp'
import ForgotPassword from './ForgotPassword'
import OnTheWay from './OnTheWay'

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
  <Route
    path="/landing/forgot-password"
    element={<ForgotPassword />}
    key="ForgotPassword"
  />,
  <Route path="/landing/on-the-way" element={<OnTheWay />} key="OnTheWay" />,
]
