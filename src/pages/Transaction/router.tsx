import { Route } from 'react-router'
import Transaction from './index'
import AuthWrapper from '@/components/AuthWrapper'

const ROUTE_PATH = {
  TRANSACTION: '/transaction',
}

export default [
  <Route path={ROUTE_PATH.TRANSACTION} key={ROUTE_PATH.TRANSACTION}>
    {AuthWrapper(<Transaction />, ROUTE_PATH.TRANSACTION)}
  </Route>,
]
