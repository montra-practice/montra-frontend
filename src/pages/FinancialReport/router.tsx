import AuthWrapper from '@/components/AuthWrapper'
import { Route } from 'react-router-dom'
import FinancialReport from '.'
import ReportDetail from './ReportDetail'

export const ROUTE_PATH = {
  FINANCIAL_REPORT: '/financial-report',
  REPORT_DETAIL: '/report-detail',
}

export default [
  <Route path={ROUTE_PATH.FINANCIAL_REPORT} key={ROUTE_PATH.FINANCIAL_REPORT}>
    {AuthWrapper(<FinancialReport />, ROUTE_PATH.FINANCIAL_REPORT)}
  </Route>,
  <Route path={ROUTE_PATH.REPORT_DETAIL} key={ROUTE_PATH.REPORT_DETAIL}>
    {AuthWrapper(<ReportDetail />, ROUTE_PATH.REPORT_DETAIL)}
  </Route>,
]
