import TabFooter from '@/components/TabFooter'
import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router'

function Budget() {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }
  return (
    <>
      <NavBar onBack={goBack}>Budget</NavBar>
      <TabFooter />
    </>
  )
}
export default Budget
