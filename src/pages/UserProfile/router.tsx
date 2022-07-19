import { Route } from 'react-router'
import UserProfile from './index'
import UserAccount from './Account/index'
import AccountDetail from './AccountDetail'

export default [
  <Route path="user-profile" element={<UserProfile />} key="userProfile" />,
  <Route
    path="user-profile/account"
    element={<UserAccount />}
    key="userAccount"
  />,
  <Route
    path="user-profile/account/detail/:type"
    element={<AccountDetail />}
    key="AccountDetail"
  />,
]
