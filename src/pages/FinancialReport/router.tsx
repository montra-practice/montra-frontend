import AuthWrapper from '@/components/AuthWrapper'
import { Route } from 'react-router-dom'
import FinancialReport from '.'

const ROUTE_PATH = {
  FINANCIAL_REPORT: '/financial-report/:period',
}

export default [
  <Route path={ROUTE_PATH.FINANCIAL_REPORT} key={ROUTE_PATH.FINANCIAL_REPORT}>
    {AuthWrapper(<FinancialReport />, ROUTE_PATH.FINANCIAL_REPORT)}
  </Route>,
]
