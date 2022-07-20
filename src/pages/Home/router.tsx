import { Route } from 'react-router'
import Home from './index'
import AuthWrapper from '@/components/AuthWrapper'

const ROUTE_PATH = {
  HOME: '/home',
}

export default [
  <Route path={ROUTE_PATH.HOME} key={ROUTE_PATH.HOME}>
    {AuthWrapper(<Home />, ROUTE_PATH.HOME)}
  </Route>,
]
