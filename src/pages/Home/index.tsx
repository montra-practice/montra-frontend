import { Avatar } from 'antd-mobile'
import styles from './index.scss'
import IncomeWhiteIcon from '@/assets/icons/home/income_white_background.svg'
import EspenseWhiteIcon from '@/assets/icons/home/espense_white_background.svg'
import incomeImg from '@/assets/icons/home/income.svg'
import NotificationIcon from '@/assets/icons/home/notification.svg'
import Select from '@/components/Select'
import Tag from '@/components/Tag'
import { MonthEnglish, Tags } from '@/constants/base'
import { transactionList } from '@/constants/transaction'
import TransactionList from '@/components/TransactionList'
import TabFooter from '@/components/TabFooter'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import CommonLineChart from '@/components/CommonLineChart'

function Home() {
  const navigate = useNavigate()
  const goNotification = () => {
    navigate('/notification')
  }

  useEffect(() => {
    document.title = 'Home'
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Avatar className={styles.avatar} src={incomeImg} alt="avatar" />
        <Select
          size="small"
          arrow="left"
          options={MonthEnglish}
          defaultValue={new Date().getMonth() + ''}
        ></Select>
        <img
          src={NotificationIcon}
          alt="notification-icon"
          data-testid="notification"
          onClick={goNotification}
          className={styles.icons}
        />
      </div>
      <div className={styles.title}>
        <p>Account Balance</p>
        <p>$9400</p>
      </div>
      <div className={styles['sub-title']}>
        <div>
          <img src={IncomeWhiteIcon} alt="income-white-icon" />
          <div>
            <div>Income</div>
            <div>$5000</div>
          </div>
        </div>
        <div>
          <img src={EspenseWhiteIcon} alt="espense-white-icon" />
          <div>
            <div>Expenses</div>
            <div>$1200</div>
          </div>
        </div>
      </div>
      <div className={styles['line-chart']}>
        <p>Spend Frequency</p>
        <div>
          <CommonLineChart />
        </div>
      </div>
      <div className={styles['add-related']}>
        <div className={styles.tags}>
          <Tag defaultValue="Today" tags={Tags}></Tag>
        </div>
        <div className={styles.content}>
          <div>
            Recent Transaction
            <div>See All</div>
          </div>
          <TransactionList list={transactionList[0].list} />
        </div>
      </div>
      <TabFooter />
    </div>
  )
}

export default Home
