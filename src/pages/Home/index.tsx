import { Avatar } from 'antd-mobile'
import styles from './index.scss'
import { EspenseWhiteIcon, IncomeWhiteIcon } from '@/assets/icons/home_icons'
import incomeImg from '@/assets/images/home/income.png'
import notificationImg from '@/assets/icons/notification.svg'
import { useNavigate } from 'react-router'
import Select from '@/components/Select'
import Tag from '@/components/Tag'
import { MonthEnglish, Tags } from '@/constants/base'
import { transactionList } from '@/constants/transaction'
import TransactionList from '../Transaction/components/TransactionList'

function Home() {
  const navigate = useNavigate()

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Avatar className={styles.avatar} src={incomeImg} />
        <Select
          options={MonthEnglish}
          defaultValue={new Date().getMonth() + ''}
        ></Select>
        <img src={notificationImg} alt="notification" />
      </div>
      <div className={styles.title}>
        <p>Account Balance</p>
        <p>$9400</p>
      </div>
      <div className={styles['sub-title']}>
        <div>
          {IncomeWhiteIcon}
          <div>
            <div>Income</div>
            <div>$5000</div>
          </div>
        </div>
        <div>
          {EspenseWhiteIcon}
          <div>
            <div>Expenses</div>
            <div>$1200</div>
          </div>
        </div>
      </div>
      <div className={styles['line-chart']}>
        <p>Spend Frequency</p>
        <div></div>
        <Tag defaultValue="Today" tags={Tags}></Tag>
      </div>
      <div className={styles.content}>
        <div>
          Recent Transaction
          <div onClick={() => navigate('./../transaction')}>See All</div>
        </div>
        <div>
          <TransactionList list={transactionList[0].list} />
        </div>
      </div>
    </div>
  )
}

export default Home
