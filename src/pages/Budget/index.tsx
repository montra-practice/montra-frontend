import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import TabFooter from '@/components/TabFooter'
import TimeBar, { IMonth } from './components/TimeBar'
import { Button, ProgressBar } from 'antd-mobile'
import styles from './index.scss'
import { CategoryTypeColor } from '@/constants/transaction'
import { ExclamationCircleFill } from 'antd-mobile-icons'
import { getBudgetList } from '@/store/budget/api'
import { ROUTE_PATH } from './router'

export interface IBudgetDetail extends IBudget {
  bgColor: string
  warning: boolean
  remain: number
  costPercent: number
}
function Budget() {
  const navigate = useNavigate()
  const [budgetList, setBudgetList] = useState<IBudget[]>([])
  /* const budgetList = [
    {
      budgetId: 1,
      categoryId: '1',
      categoryName: 'Shopping',
      budgetTarget: 1000,
      realCost: 1200,
    },
    {
      budgetId: 2,
      categoryId: '4',
      categoryName: 'Transportation',
      budgetTarget: 700,
      realCost: 350,
    },
  ] */
  const handleCreate = () => {
    navigate(ROUTE_PATH.BUDGET_HANDLE, { state: { type: 'add' } })
  }
  const displayDetial = (val: IBudgetDetail) => {
    navigate(ROUTE_PATH.BUDGET_DETAIL, { state: val })
  }
  const [selectedMonth, setSelectedMonth] = useState<IMonth>()
  const onSelected = (val: IMonth) => {
    // console.log('vvvv', val)
    setSelectedMonth(val)
  }
  const renderBudgetList = () => {
    if (budgetList.length <= 0) {
      return (
        <div className={styles.tip}>
          You don’t have a budget. Let’s make one so you in control.
        </div>
      )
    } else {
      return budgetList.map((item) => {
        const bgColor = CategoryTypeColor[item.categoryId]
        const warning = item.budgetTarget < item.realCost ? true : false
        const remain = Math.max(item.budgetTarget - item.realCost, 0)
        const costPercent = (item.realCost / item.budgetTarget) * 100
        console.log(costPercent)
        return (
          <div
            className={styles['budget-item']}
            key={item.budgetId}
            data-testid="budget-item"
            onClick={() =>
              displayDetial({ bgColor, warning, remain, costPercent, ...item })
            }
          >
            <div className={styles['cate-content']}>
              <div className={styles['cate-type-box']}>
                <div
                  className={styles['cate-type-icon']}
                  style={{ backgroundColor: `${bgColor}` }}
                ></div>
                <div className={styles['cat-type-title']}>
                  {item.categoryName}
                </div>
              </div>
              {warning && (
                <ExclamationCircleFill
                  color="var(--adm-color-danger)"
                  className={styles['warn-icon']}
                />
              )}
            </div>
            <div className={styles.progress}>
              <div className={styles['progress-remain']}>
                Remaining ${remain}
              </div>
              <ProgressBar
                percent={costPercent}
                style={{
                  '--track-width': '12px',
                  '--fill-color': `${bgColor}`,
                }}
              />
              <div className={styles['progress-note']}>
                ${item.realCost} of ${item.budgetTarget}
              </div>
            </div>
            {warning && (
              <div className={styles['warn-tip']}>You’ve exceed the limit!</div>
            )}
          </div>
        )
      })
    }
  }
  const getBudgets = async () => {
    const budgetResult = await getBudgetList()
    // console.log('rrr', budgetResult)
    setBudgetList(budgetResult?.response)
  }
  useEffect(() => {
    getBudgets()
  }, [])
  return (
    <div className="budget">
      <TimeBar onSelected={onSelected} selectedMonth={selectedMonth}></TimeBar>
      <div className={styles['budget-list']}>{renderBudgetList()}</div>
      <Button className="btn-big budget-btn" onClick={handleCreate}>
        Create a Budget
      </Button>
      <TabFooter />
    </div>
  )
}
export default Budget
