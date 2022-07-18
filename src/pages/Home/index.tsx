import { Avatar } from 'antd-mobile'
import styles from './index.scss'
import { ReactComponent as IncomeWhiteIcon } from '@/assets/icons/home/income_white_background.svg'
import { ReactComponent as EspenseWhiteIcon } from '@/assets/icons/home/espense_white_background.svg'
import incomeImg from '@/assets/icons/home/income.svg'
import { ReactComponent as NotificationIcon } from '@/assets/icons/home/notification.svg'
import Select from '@/components/Select'
import Tag from '@/components/Tag'
import { MonthEnglish, Tags } from '@/constants/base'
import { transactionList } from '@/constants/transaction'
import TransactionList from '../Transaction/components/TransactionList'

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <Avatar className={styles.avatar} src={incomeImg} alt="avatar" />
        <Select
          options={MonthEnglish}
          defaultValue={new Date().getMonth() + ''}
        ></Select>
        <NotificationIcon />
      </div>
      <div className={styles.title}>
        <p>Account Balance</p>
        <p>$9400</p>
      </div>
      <div className={styles['sub-title']}>
        <div>
          <IncomeWhiteIcon />
          <div>
            <div>Income</div>
            <div>$5000</div>
          </div>
        </div>
        <div>
          <EspenseWhiteIcon />
          <div>
            <div>Expenses</div>
            <div>$1200</div>
          </div>
        </div>
      </div>
      <div className={styles['line-chart']}>
        <p>Spend Frequency</p>
        <div></div>
      </div>
      <div className={styles['add-related']}>
        {/* <div className={styles['add-active']}></div> */}
        <div className={styles.tags}>
          <Tag defaultValue="Today" tags={Tags}></Tag>
        </div>
        <div className={styles.content}>
          <div>
            Recent Transaction
            <div>See All</div>
          </div>
          <div>
            <TransactionList list={transactionList[0].list} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
