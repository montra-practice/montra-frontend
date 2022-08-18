import { ReactComponent as AddIcon } from '@/assets/icons/home/add_icon.svg'
import { ReactComponent as BudgetIcon } from '@/assets/icons/home/budget.svg'
import { ReactComponent as HomeIcon } from '@/assets/icons/home/home.svg'
import { ReactComponent as ProfileIcon } from '@/assets/icons/home/profile.svg'
import { ReactComponent as TransactionIcon } from '@/assets/icons/home/transaction.svg'
import { ReactComponent as IncomeImg } from '@/assets/icons/home/income.svg'
import { ReactComponent as TransferImg } from '@/assets/icons/home/transfer.svg'
import { ReactComponent as ExpenseImg } from '@/assets/icons/home/expense.svg'
import { TabBar } from 'antd-mobile'
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import styles from './index.scss'

const TabFooter = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeKey] = useState(location.pathname)
  const [addStatus, toggleAddStatus] = useState(false)

  const onTabChange = (key: string) => {
    if (key === 'add') {
      toggleAddStatus(!addStatus)
      return
    }
    navigate(`${key}`)
    toggleAddStatus(false)
  }

  const goToAdd = (uri: string) => () => navigate(`${uri}`)

  const activeBlur = () => (e: { target: any }) => {
    if (e.target.tagName !== 'svg') {
      toggleAddStatus(false)
    }
  }

  const tabs = [
    {
      key: '/home',
      icon: <HomeIcon className={styles.icon} />,
    },
    {
      key: '/transaction',
      icon: <TransactionIcon className={styles.icon} />,
    },
    {
      key: 'add',
      icon: (
        <AddIcon
          className={addStatus ? styles['add-icon-active'] : styles['add-icon']}
        />
      ),
    },
    {
      key: '/budget',
      icon: <BudgetIcon className={styles.icon} />,
    },
    {
      key: '/user-profile',
      icon: <ProfileIcon className={styles.icon} />,
    },
  ]

  const renderAddType = () => {
    return (
      <div
        tabIndex={0}
        onBlur={activeBlur()}
        className={styles['add-active']}
        onClick={activeBlur()}
        data-testid="addActive"
      >
        <div>
          <TransferImg
            onClick={goToAdd('/transfer')}
            data-testid="transfer"
            className={styles['big-icon']}
          />
          <div>
            <IncomeImg
              onClick={goToAdd('/income')}
              className={styles['big-icon']}
            />
            <ExpenseImg
              onClick={goToAdd('/expense')}
              className={styles['big-icon']}
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {addStatus && renderAddType()}
      <div className={styles.footer}>
        <TabBar activeKey={activeKey} onChange={onTabChange}>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              data-testid={item.key}
            />
          ))}
        </TabBar>
      </div>
    </>
  )
}

export default TabFooter
