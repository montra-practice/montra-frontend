import AuthWrapper from '@/components/AuthWrapper'
import { Route } from 'react-router'
import TransactionDetail from '.'

const ROUTE_PATH = {
  TRANSACTION_DETAIL: '/transaction_detail',
}

export default [
  <Route
    path={ROUTE_PATH.TRANSACTION_DETAIL}
    key={ROUTE_PATH.TRANSACTION_DETAIL}
  >
    {AuthWrapper(<TransactionDetail />, ROUTE_PATH.TRANSACTION_DETAIL)}
  </Route>,
]
