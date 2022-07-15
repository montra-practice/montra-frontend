import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router'

function Income() {
  const navigate = useNavigate()
  return <NavBar onBack={() => navigate('/home')}>Income</NavBar>
}
export default Income
