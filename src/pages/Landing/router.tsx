import { Route } from 'react-router'
import Landing from './index'
import SignUp from './SignUp'
import Login from './Login'
import Verification from './Verification'
import SetUp from './SetUp'
import ForgotPassword from './ForgotPassword'
import OnTheWay from './OnTheWay'
import AuthWrapper from '@/components/AuthWrapper'

const ROUTE_PATH = {
  LANDING: '/landing',
  LANDING_SIGN_UP: '/landing/sign-up',
  LANDING_LOGIN: '/landing/login',
  LANDING_VERIFICATION: '/landing/verification',
  LANDING_SETUP: '/landing/setup',
  LANDING_FORGOT_PASSWORD: '/landing/forgot-password',
  LANDING_ON_THE_WAY: '/landing/on-the-way',
}

export default [
  <Route path={ROUTE_PATH.LANDING} key={ROUTE_PATH.LANDING}>
    {AuthWrapper(<Landing />, ROUTE_PATH.LANDING)}
  </Route>,
  <Route path={ROUTE_PATH.LANDING_SIGN_UP} key={ROUTE_PATH.LANDING_SIGN_UP}>
    {AuthWrapper(<SignUp />, ROUTE_PATH.LANDING_SIGN_UP)}
  </Route>,
  <Route path={ROUTE_PATH.LANDING_LOGIN} key={ROUTE_PATH.LANDING_LOGIN}>
    {AuthWrapper(<Login />, ROUTE_PATH.LANDING_LOGIN)}
  </Route>,
  <Route
    path={ROUTE_PATH.LANDING_VERIFICATION}
    key={ROUTE_PATH.LANDING_VERIFICATION}
  >
    {AuthWrapper(<Verification />, ROUTE_PATH.LANDING_VERIFICATION)}
  </Route>,
  <Route path={ROUTE_PATH.LANDING_SETUP} key={ROUTE_PATH.LANDING_SETUP}>
    {AuthWrapper(<SetUp />, ROUTE_PATH.LANDING_SETUP)}
  </Route>,
  <Route
    path={ROUTE_PATH.LANDING_FORGOT_PASSWORD}
    key={ROUTE_PATH.LANDING_FORGOT_PASSWORD}
  >
    {AuthWrapper(<ForgotPassword />, ROUTE_PATH.LANDING_FORGOT_PASSWORD)}
  </Route>,
  <Route
    path={ROUTE_PATH.LANDING_ON_THE_WAY}
    key={ROUTE_PATH.LANDING_ON_THE_WAY}
  >
    {AuthWrapper(<OnTheWay />, ROUTE_PATH.LANDING_ON_THE_WAY)}
  </Route>,
]
