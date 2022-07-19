import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router'

function Transfer() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }
  return <NavBar onBack={goBack}>Transfer</NavBar>
}
export default Transfer
