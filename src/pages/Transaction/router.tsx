import { Route } from 'react-router'
import Transaction from './index'
import AuthWrapper from '@/components/AuthWrapper'

export default [
  <Route path="/transaction" key="Transaction">
    {AuthWrapper(<Transaction />, '/transaction')}
  </Route>,
]
