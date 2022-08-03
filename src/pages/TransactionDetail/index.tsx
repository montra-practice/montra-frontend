import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router'
import styles from './index.scss'

export default () => {
  const navigate = useNavigate()
  const goBack = () => {
    navigate('/home')
  }
  return (
    <div className={styles.expense}>
      <NavBar onBack={goBack} className="nav-bar-white">
        Transaction Detail
      </NavBar>
    </div>
  )
}
