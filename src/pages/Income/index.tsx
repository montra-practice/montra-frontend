import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router'

function Income() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }
  return <NavBar onBack={goBack}>Income</NavBar>
}
export default Income
