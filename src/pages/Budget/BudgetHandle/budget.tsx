import { useState } from 'react'
import { NavBar, Button, Slider, Card, Switch } from 'antd-mobile'
import styles from './index.scss'
import { goBack } from '@/utils/common'
import { editBudget, addBudget } from '@/store/budget/api'
import DialogShow from '@/components/DialogShow'
import AmountInput from '@/components/AmountInput'
import Select from '@/components/Select'
import { categoryExpense } from '@/constants/transaction'
import { IBudgetDetail } from '..'
import { useNavigate } from 'react-router-dom'
import { ROUTE_PATH } from '../router'
export interface IBudgetHandle {
  type: string
  data?: IBudgetDetail
}
export default function BudgetHandle({ type, data }: IBudgetHandle) {
  const title = type === 'add' ? 'Create Budget' : 'Edit Budget'
  const navigate = useNavigate()

  const [amount, setAmount] = useState(data?.budgetTarget.toString() || '')
  const [cateType, setCateType] = useState(data?.categoryName)
  const [cateId, setCateId] = useState(data?.categoryId)

  const [ifAlert, setIfAlert] = useState(data?.receiveAlert || false)
  const [alertValue, setAlertValue] = useState<number | [number, number]>(
    data?.alertPercent || 0,
  )
  const handleAmountInput = (val: string) => {
    console.log('amount', val)
    setAmount(val)
  }
  const handleCateType = (item: any) => {
    console.log(item)
    setCateType(item.label)
    setCateId(item.value)
  }
  const toastValue = (value: number | [number, number]) => {
    console.log(value)
    setAlertValue(value)
  }
  const handleBudget = async () => {
    let budgetParams: Partial<IBudget> = {
      budgetId: data?.budgetId,
      categoryId: cateId,
      categoryName: cateType,
      budgetTarget: parseInt(amount),
      receiveAlert: ifAlert,
      alertPercent: alertValue,
    }
    if (type === 'add') {
      await addBudget(budgetParams)
      DialogShow('add success', () => navigate(ROUTE_PATH.BUDGET))
    } else {
      await editBudget(budgetParams)
      DialogShow('update success', () => navigate(ROUTE_PATH.BUDGET))
    }
  }
  const MarkIcon = ({ index }: { index: number | [number, number] }) => {
    return <div className={styles['slide-icon']}>{index}%</div>
  }
  return (
    <div className="budget">
      <NavBar onBack={goBack} className="nav-bar-white">
        {title}
      </NavBar>
      <div className={styles['budget-bottom']}>
        <AmountInput
          amount={amount}
          title="How much do yo want to spend?"
          handleAmount={handleAmountInput}
          className={styles.amount}
        ></AmountInput>
        <Card className={styles.card}>
          <Select
            options={categoryExpense}
            selectedWithBorder={false}
            defaultValue={cateId}
            onSelect={handleCateType}
            defaultLabel="Category"
          ></Select>
          <div className={styles.alert}>
            <div className={styles['alert-des']}>
              <span className={styles['alert-title']}>Receive Alert</span>
              <span className={styles['alert-subdes']}>
                Receive alert when it reaches some point.
              </span>
            </div>
            <Switch
              checked={ifAlert}
              onChange={() => {
                setIfAlert(!ifAlert)
              }}
              style={{
                '--checked-color': '#7f3dff',
                '--height': '24px',
                '--width': '42px',
              }}
              data-testid="switch"
            />
          </div>
          {ifAlert && (
            <Slider
              className={styles['budget-slider']}
              onAfterChange={toastValue}
              icon={<MarkIcon index={alertValue} />}
              data-testid="slider"
            />
          )}
          <Button className="btn-big" onClick={handleBudget}>
            Continue
          </Button>
        </Card>
      </div>
    </div>
  )
}
