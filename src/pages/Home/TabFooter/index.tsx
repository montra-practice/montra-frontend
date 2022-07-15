import {
  AddActiveIcon,
  AddIcon,
  BudgetIcon,
  HomeIcon,
  ProfileIcon,
  TransactionIcon,
} from '@/assets/icons/home_icons'
import { TabBar } from 'antd-mobile'
import { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import styles from './index.scss'
import incomeImg from '@/assets/images/home/income.png'
import transferImg from '@/assets/images/home/transaction.png'
import expenseImg from '@/assets/images/home/expense.png'

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

  const goToAdd = (uri: string) => navigate(`${uri}`)

  const activeBlur = (e: { target: any }) => {
    const alts = ['income', 'transfer', 'expense']
    if (alts.includes(e.target.alt)) return
    setAdd(false)
  }

  const tabs = [
    {
      key: 'home',
      title: 'Home',
      icon: HomeIcon,
    },
    {
      key: 'transaction',
      title: 'Transaction',
      icon: TransactionIcon,
    },
    {
      key: 'add',
      title: 'Add',
      icon: () => (add ? AddActiveIcon : AddIcon),
    },
    {
      key: 'budget',
      title: 'Budget',
      icon: BudgetIcon,
    },
    {
      key: 'user-profile',
      title: 'Profile',
      icon: ProfileIcon,
    },
  ]

  const AddActive = (
    <div
      style={{ width: '100%', textAlign: 'center' }}
      onClick={(e) => activeBlur(e)}
    >
      <img src={incomeImg} alt="income" onClick={() => goToAdd('income')}></img>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          paddingTop: '11px',
        }}
      >
        <img
          src={transferImg}
          alt="transfer"
          onClick={() => goToAdd('transfer')}
        ></img>
        <img
          src={expenseImg}
          alt="expense"
          onClick={() => goToAdd('expense')}
        ></img>
      </div>
    </div>
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.content} onClick={() => setAdd(false)}>
        <Outlet></Outlet>
      </div>
      <div className={styles['add-active']}>{add && AddActive}</div>
      <div className={styles.footer}>
        <TabBar activeKey={activeKey} onChange={onTabChange}>
          <svg />
          {tabs.map((item) => (
            <TabBar.Item
              key={item.key}
              icon={item.icon(activeKey === item.key)}
            />
          ))}
        </TabBar>
      </div>
    </div>
  )
}

export default TabFooter
