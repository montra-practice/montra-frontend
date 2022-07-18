import TabFooter from '@/pages/Home/TabFooter'
import { Route } from 'react-router'
import { Navigate } from 'react-router-dom'
import Transaction from '../Transaction'
import UserProfile from '../UserProfile'
import Home from './index'

export default [
  <Route element={<TabFooter />} key="home">
    <Route path="home" element={<Home />} key="home-default" />,
    <Route path="transaction" element={<Transaction />} key="transaction" />
    <Route path="user-profile" element={<UserProfile />} key="userProfile" />,
    <Route path="*" element={<Navigate to={'/home'} />} key="default" />,
  </Route>,
]
