import TabFooter from '@/pages/Home/TabFooter'
import { Route } from 'react-router'
import { Navigate } from 'react-router-dom'
import Transaction from '../Transaction'
import UserProfile from '../UserProfile'
import Expense from './Expense'
import Income from './Income'
import Home from './index'
import Transfer from './Transfer'

export default [
  <Route element={<TabFooter />} key="home">
    <Route path="home" element={<Home />} key="home-default" />,
    <Route path="transaction" element={<Transaction />} key="transaction" />
    <Route path="user-profile" element={<UserProfile />} key="userProfile" />,
    <Route path="*" element={<Navigate to={'/home'} />} key="default" />,
  </Route>,
  <Route path="expense" element={<Expense />} key="Expense" />,
  <Route path="income" element={<Income />} key="Income" />,
  <Route path="transfer" element={<Transfer />} key="Transfer" />,
]
