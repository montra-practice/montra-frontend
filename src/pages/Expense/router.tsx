import { Route } from 'react-router'
import Expense from '.'
import AuthWrapper from '@/components/AuthWrapper'

const ROUTE_PATH = {
  EXPENSE: '/expense',
}

export default [
  <Route path={ROUTE_PATH.EXPENSE} key={ROUTE_PATH.EXPENSE}>
    {AuthWrapper(<Expense />, ROUTE_PATH.EXPENSE)}
  </Route>,
]
