import AuthWrapper from '@/components/AuthWrapper'
import { Route } from 'react-router'
import Transfer from '.'

const ROUTE_PATH = {
  TRANSFER: '/transfer',
}

export default [
  <Route path={ROUTE_PATH.TRANSFER} key={ROUTE_PATH.TRANSFER}>
    {AuthWrapper(<Transfer />, ROUTE_PATH.TRANSFER)}
  </Route>,
]
