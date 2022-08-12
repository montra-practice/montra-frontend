import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavBar, Button, ProgressBar } from 'antd-mobile'
import { ExclamationCircleFill } from 'antd-mobile-icons'
import { DeleteOutline } from 'antd-mobile-icons'
import styles from './index.scss'
import { goBack } from '@/utils/common'
import { CategoryTypeIcons } from '@/constants/transaction'
import { IBudgetDetail } from '..'
import RemoveAlert from '@/components/RemoveAlert'
import { deleteBudget } from '@/store/budget/api'
import DialogShow from '@/components/DialogShow'
import { ROUTE_PATH } from '../router'

export default function BudgetDetail() {
  const { state } = useLocation()
  const navigate = useNavigate()
  const budgetDetail = state as IBudgetDetail
  const [alert, setAlert] = useState(false)
  console.log(budgetDetail)
  const cateIcon = CategoryTypeIcons[budgetDetail.categoryId]
  const handleEdit = () => {
    navigate(ROUTE_PATH.BUDGET_HANDLE, {
      state: { type: 'edit', data: budgetDetail },
    })
  }
  const handelRemove = async () => {
    await deleteBudget(budgetDetail.budgetId)
    setAlert(false)
    DialogShow('delete success!', () => goBack())
  }
  return (
    <div className={styles.detail}>
      <NavBar
        onBack={goBack}
        right={
          <DeleteOutline
            fontSize={28}
            onClick={() => setAlert(true)}
            data-testid="delete"
          />
        }
      >
        Detail Budget
      </NavBar>
      <div className={styles['cate-box']}>
        <div className={styles['cate-type-box']}>
          <img
            src={cateIcon}
            alt="cate-icon"
            className={styles['cate-type-icon']}
          />
          <div className={styles['cate-type-title']}>
            {budgetDetail.categoryName}
          </div>
        </div>
      </div>
      <div className={styles['detail-remain']}>
        <span>Remaining</span>
        <span className={styles.money}>${budgetDetail.remain}</span>
        <ProgressBar
          percent={budgetDetail.costPercent}
          style={{
            '--track-width': '12px',
            '--fill-color': `${budgetDetail.bgColor}`,
          }}
        />
      </div>
      <div className={styles['warn-box']}>
        <ExclamationCircleFill fontSize={24} color="#fff" />
        <span className={styles['warn-tip']}>You’ve exceed the limit</span>
      </div>
      <Button className="btn-big budget-btn" onClick={handleEdit}>
        Edit
      </Button>
      <RemoveAlert
        visible={alert}
        onCancel={() => setAlert(false)}
        onConfirm={handelRemove}
        title="Remove this budget?"
        description="Are you sure do you wanna remove this budget?"
      />
    </div>
  )
}
