import ResetPassword from './index'
import { Route } from 'react-router'
import AuthWrapper from '@/components/AuthWrapper'

const ROUTE_PATH = {
  RESET_PASSWORD: '/reset-password',
}

export default [
  <Route path={ROUTE_PATH.RESET_PASSWORD} key={ROUTE_PATH.RESET_PASSWORD}>
    {AuthWrapper(<ResetPassword />, ROUTE_PATH.RESET_PASSWORD)}
  </Route>,
]
