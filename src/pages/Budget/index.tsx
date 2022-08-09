import TabFooter from '@/components/TabFooter'
import TimeBar, { IMonth } from './components/TimeBar'
import { Button } from 'antd-mobile'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import styles from './index.scss'

function Budget() {
  const navigate = useNavigate()
  const handleCreate = () => {
    navigate('/createBudget')
  }
  const [selectedMonth, setSelectedMonth] = useState<IMonth>()
  const onSelected = (val: IMonth) => {
   // console.log('vvvv', val)
    setSelectedMonth(val)
  }
  return (
    <div className={styles.budget}>
      <TimeBar onSelected={onSelected} selectedMonth={selectedMonth}></TimeBar>
      <div className={styles['budget-list']}>
        <div className={styles.tip}>You don’t have a budget.
          Let’s make one so you in control.
        </div>
      </div>
      <Button className={`btn-big ${styles['budget-btn']}`} onClick={handleCreate}>
        Create a Budget
      </Button>
      <TabFooter />
    </div >
  )
}
export default Budget
