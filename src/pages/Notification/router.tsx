import { Route } from 'react-router'
import Notification from '.'
import AuthWrapper from '@/components/AuthWrapper'

const ROUTE_PATH = {
  NOTIFICATION: '/notification',
}

export default [
  <Route path={ROUTE_PATH.NOTIFICATION} key={ROUTE_PATH.NOTIFICATION}>
    {AuthWrapper(<Notification />, ROUTE_PATH.NOTIFICATION)}
  </Route>,
]
