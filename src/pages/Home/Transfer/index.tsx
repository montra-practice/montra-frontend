import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router'

function Transfer() {
  const navigate = useNavigate()
  return <NavBar onBack={() => navigate('/home')}>Transfer</NavBar>
}
export default Transfer
