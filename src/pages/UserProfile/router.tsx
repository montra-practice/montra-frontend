import { Route } from 'react-router'
import UserProfile from './index'
import UserAccount from './Account'

export default [
  <Route path="user-profile" element={<UserProfile />} key="userProfile" />,
  <Route
    path="user-profile/account"
    element={<UserAccount />}
    key="userAccount"
  />,
]
