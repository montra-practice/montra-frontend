import { Route } from 'react-router'
import Income from '.'
import AuthWrapper from '@/components/AuthWrapper'

const ROUTE_PATH = {
  INCOME: '/income',
}

export default [
  <Route path={ROUTE_PATH.INCOME} key={ROUTE_PATH.INCOME}>
    {AuthWrapper(<Income />, ROUTE_PATH.INCOME)}
  </Route>,
]
