import AuthWrapper from '@/components/AuthWrapper'
import { Route } from 'react-router'
import UserProfile from './index'
import UserAccount from './Account/index'
import AccountDetail from './AccountDetail'

const ROUTE_PATH = {
  USER_PROFILE: '/user-profile',
  USER_PROFILE_ACCOUNT: 'user-profile/account',
  USER_PROFILE_ACCOUNT_DETAIL: 'user-profile/account/detail/:type',
}

export default [
  <Route path={ROUTE_PATH.USER_PROFILE} key={ROUTE_PATH.USER_PROFILE}>
    {AuthWrapper(<UserProfile />, ROUTE_PATH.USER_PROFILE)}
  </Route>,
  <Route
    path={ROUTE_PATH.USER_PROFILE_ACCOUNT}
    key={ROUTE_PATH.USER_PROFILE_ACCOUNT}
  >
    {AuthWrapper(<UserAccount />, ROUTE_PATH.USER_PROFILE_ACCOUNT)}
  </Route>,
  <Route
    path={ROUTE_PATH.USER_PROFILE_ACCOUNT_DETAIL}
    key={ROUTE_PATH.USER_PROFILE_ACCOUNT_DETAIL}
  >
    {AuthWrapper(<AccountDetail />, ROUTE_PATH.USER_PROFILE_ACCOUNT_DETAIL)}
  </Route>,
]
