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
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './index.scss'

const TabFooter = () => {
  const [activeKey, setActiveKey] = useState('home')
  const [add, setAdd] = useState(false)
  const navigate = useNavigate()

  const onTabChange = (key: string) => {
    if (key === 'add') {
      setAdd(!add)
      return
    }
    navigate(`${key}`)
    setActiveKey(key)
    setAdd(false)
  }

  const goToAdd = (uri: string) => () => navigate(`${uri}`)

  const activeBlur = (e: { target: any }) => {
    const alts = ['income', 'transfer', 'expense']
    if (alts.includes(e.target.alt)) return
    setAdd(false)
  }

  const changeAddState = (flag: boolean) => () => {
    setAdd(flag)
  }

  const tabs = [
    {
      key: 'home',
      title: 'Home',
      icon: <HomeIcon />,
    },
    {
      key: 'transaction',
      title: 'Transaction',
      icon: <TransactionIcon />,
    },
    {
      key: 'add',
      title: 'Add',
      icon: (
        <AddIcon
          className={add ? styles['add-icon-active'] : styles['add-icon']}
        />
      ),
    },
    {
      key: 'budget',
      title: 'Budget',
      icon: <BudgetIcon />,
    },
    {
      key: 'user-profile',
      title: 'Profile',
      icon: <ProfileIcon />,
    },
  ]

  const AddActive = (
    <div onClick={(e) => activeBlur(e)}>
      <TransferImg onClick={goToAdd('transfer')} />
      <div>
        <IncomeImg onClick={goToAdd('income')} />
        <ExpenseImg onClick={goToAdd('expense')} />
      </div>
    </div>
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.content} onClick={changeAddState(false)}>
        <Outlet></Outlet>
      </div>
      <div className={styles['add-active']}>{add && AddActive}</div>
      <div className={styles.footer}>
        <TabBar activeKey={activeKey} onChange={onTabChange}>
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon}
              className={item.key === activeKey ? styles['tab-selected'] : ''}
            />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default TabFooter
