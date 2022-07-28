import AuthWrapper from '@/components/AuthWrapper'
import { Route } from 'react-router'
import UserProfile from './index'
import UserAccount from './Account'
import EditAccount from './AccountEdit'
import UserInfoEdit from './UserInfoEdit'
import AccountDetail from './AccountDetail'
import UserSetting from './UserSetting'

const ROUTE_PATH = {
  USER_PROFILE: 'user-profile',
  USER_PROFILE_ACCOUNT: 'user-profile/account',
  USER_INFO_EDIT: 'user-profile/edit',
  USER_PROFILE_EDIT_ACCOUNT: 'user-profile/account/edit',
  USER_PROFILE_ADD_ACCOUNT: 'user-profile/account/add',
  USER_PROFILE_ACCOUNT_DETAIL: 'user-profile/account/detail/:type',

  USER_SETTING: 'user-profile/settings',
}

export default [
  <Route path={ROUTE_PATH.USER_PROFILE} key={ROUTE_PATH.USER_PROFILE}>
    {AuthWrapper(<UserProfile />, ROUTE_PATH.USER_PROFILE)}
  </Route>,
  <Route path={ROUTE_PATH.USER_INFO_EDIT} key={ROUTE_PATH.USER_INFO_EDIT}>
    {AuthWrapper(<UserInfoEdit />, ROUTE_PATH.USER_INFO_EDIT)}
  </Route>,
  <Route
    path={ROUTE_PATH.USER_PROFILE_ACCOUNT}
    key={ROUTE_PATH.USER_PROFILE_ACCOUNT}
  >
    {AuthWrapper(<UserAccount />, ROUTE_PATH.USER_PROFILE_ACCOUNT)}
  </Route>,
  <Route
    path={ROUTE_PATH.USER_PROFILE_EDIT_ACCOUNT}
    key={ROUTE_PATH.USER_PROFILE_EDIT_ACCOUNT}
  >
    {AuthWrapper(<EditAccount />, ROUTE_PATH.USER_PROFILE_EDIT_ACCOUNT)}
  </Route>,
  <Route
    path={ROUTE_PATH.USER_PROFILE_ADD_ACCOUNT}
    key={ROUTE_PATH.USER_PROFILE_ADD_ACCOUNT}
  >
    {AuthWrapper(<EditAccount />, ROUTE_PATH.USER_PROFILE_ADD_ACCOUNT)}
  </Route>,
  <Route
    path={ROUTE_PATH.USER_PROFILE_ACCOUNT_DETAIL}
    key={ROUTE_PATH.USER_PROFILE_ACCOUNT_DETAIL}
  >
    {AuthWrapper(<AccountDetail />, ROUTE_PATH.USER_PROFILE_ACCOUNT_DETAIL)}
  </Route>,
  <Route path={ROUTE_PATH.USER_SETTING} key={ROUTE_PATH.USER_SETTING}>
    {AuthWrapper(<UserSetting />, ROUTE_PATH.USER_SETTING)}
  </Route>,
]
