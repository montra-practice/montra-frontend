import { HashRouter, Routes, Navigate } from 'react-router-dom'
import { Route } from 'react-router'
import HomeRouter from '@/pages/Home/router'
import LandingRouter from '@/pages/Landing/router'
import TransactionRouter from '@/pages/Transaction/router'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/landing" />} />
        {LandingRouter}
        {HomeRouter}
        {TransactionRouter}
      </Routes>
    </HashRouter>
  )
}

export default App
