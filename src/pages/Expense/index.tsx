import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router'

function Expense() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }
  return <NavBar onBack={goBack}>Expense</NavBar>
}
export default Expense
