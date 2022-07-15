import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router'

function Expense() {
  const navigate = useNavigate()
  return <NavBar onBack={() => navigate('/home')}>Expense</NavBar>
}
export default Expense
