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
import FinancialReportRouter from '@/pages/FinancialReport/router'
import TransactionDetailRouter from '@/pages/TransactionDetail/router'
import React, { useState } from 'react'
import Select from './components/Select'
import { selectOptions } from './constants/transaction'

export const renderSelect = (
  defaultValue: string,
  selectionChange: (item: IOption) => void,
) => {
  return (
    <Select
      size="small"
      arrow="left"
      options={selectOptions}
      defaultValue={defaultValue}
      onSelect={selectionChange}
    ></Select>
  )
}

export const PeriodSelectionContext = React.createContext<IContextType>({
  selection: '0',
  renderSelect: renderSelect,
  setSelection: () => {
    throw new Error('Context 未定义')
  },
})
function App() {
  const [selection, setSelection] = useState(selectOptions[0].value)

  return (
    <PeriodSelectionContext.Provider
      value={{
        selection,
        setSelection,
        renderSelect,
      }}
    >
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
          {FinancialReportRouter}
          {TransactionDetailRouter}
          {NotFound}
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
        </Routes>
      </HashRouter>
    </PeriodSelectionContext.Provider>
  )
}

export default App
