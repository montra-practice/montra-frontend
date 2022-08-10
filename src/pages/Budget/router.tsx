import { Route } from 'react-router'
import AuthWrapper from '@/components/AuthWrapper'
import Budget from '.'
import BudgetDetial from './BudgetDetail'
import BudgetNew from './BudgetNew'
const ROUTE_PATH = {
  BUDGET: '/budget',
  BUDGET_DETAIL: '/budget/detail',
  BUDGET_NEW: '/budget/new',
}

export default [
  <Route path={ROUTE_PATH.BUDGET} key={ROUTE_PATH.BUDGET}>
    {AuthWrapper(<Budget />, ROUTE_PATH.BUDGET)}
  </Route>,
  <Route path={ROUTE_PATH.BUDGET_DETAIL} key={ROUTE_PATH.BUDGET_DETAIL}>
    {AuthWrapper(<BudgetDetial />, ROUTE_PATH.BUDGET_DETAIL)}
  </Route>,
  <Route path={ROUTE_PATH.BUDGET_NEW} key={ROUTE_PATH.BUDGET_NEW}>
    {AuthWrapper(<BudgetNew />, ROUTE_PATH.BUDGET_NEW)}
  </Route>,
]
