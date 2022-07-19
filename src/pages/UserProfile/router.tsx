import AuthWrapper from '@/components/AuthWrapper'
import { Route } from 'react-router'
import UserProfile from './index'

const ROUTE_PATH = {
  USER_PROFILE: '/user-profile',
}

export default [
  <Route path={ROUTE_PATH.USER_PROFILE} key={ROUTE_PATH.USER_PROFILE}>
    {AuthWrapper(<UserProfile />, ROUTE_PATH.USER_PROFILE)}
  </Route>,
]
