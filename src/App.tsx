import { HashRouter, Routes, Navigate } from 'react-router-dom'
import { Route } from 'react-router'
import HomeRouter from '@/pages/Home/router'
import LandingRouter from '@/pages/Landing/router'
import UserProfile from '@/pages/UserProfile/router'
import TransactionRouter from '@/pages/Transaction/router'
// import IncomeRouter from '@/pages/Income/router'
// import ExpenseRouter from '@/pages/Expense/router'
import TransferRouter from '@/pages/Transfer/router'
import NotFound from '@/pages/NotFound/router'
import NewTransaction from '@/pages/NewTransaction/router'
import ResetPassword from '@/pages/ResetPassword/router'
import NotificationRouter from '@/pages/Notification/router'
import BudgetRouter from '@/pages/Budget/router'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/landing" />} />
        {LandingRouter}
        {HomeRouter}
        {UserProfile}
        {TransactionRouter}
        {/* {IncomeRouter}
        {ExpenseRouter} */}
        {TransferRouter}
        {NewTransaction}
        {ResetPassword}
        {NotificationRouter}
        {BudgetRouter}
        {NotFound}
        <Route path="*" element={<Navigate replace to="/404" />}></Route>
      </Routes>
    </HashRouter>
  )
}

export default App
