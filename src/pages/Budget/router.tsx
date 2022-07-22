import { Route } from 'react-router'
import AuthWrapper from '@/components/AuthWrapper'
import Budget from '.'

const ROUTE_PATH = {
  BUDGET: '/budget',
}

export default [
  <Route path={ROUTE_PATH.BUDGET} key={ROUTE_PATH.BUDGET}>
    {AuthWrapper(<Budget />, ROUTE_PATH.BUDGET)}
  </Route>,
]
