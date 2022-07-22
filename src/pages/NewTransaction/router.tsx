import { Route } from 'react-router'
import NewTransaction from '.'
import AuthWrapper from '@/components/AuthWrapper'

const ROUTE_PATH = {
  INCOME: '/income',
  EXPENSE: '/expense',
}

export default [
  <Route path={ROUTE_PATH.EXPENSE} key={ROUTE_PATH.EXPENSE}>
    {AuthWrapper(<NewTransaction />, ROUTE_PATH.EXPENSE)}
  </Route>,
  <Route path={ROUTE_PATH.INCOME} key={ROUTE_PATH.INCOME}>
    {AuthWrapper(<NewTransaction />, ROUTE_PATH.INCOME)}
  </Route>,
]
