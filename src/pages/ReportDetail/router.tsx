import AuthWrapper from '@/components/AuthWrapper'
import { Route } from 'react-router-dom'
import ReportDetail from '.'

const ROUTE_PATH = {
  REPORT_DETAIL: '/report-detail',
}

export default [
  <Route path={ROUTE_PATH.REPORT_DETAIL} key={ROUTE_PATH.REPORT_DETAIL}>
    {AuthWrapper(<ReportDetail />, ROUTE_PATH.REPORT_DETAIL)}
  </Route>,
]
