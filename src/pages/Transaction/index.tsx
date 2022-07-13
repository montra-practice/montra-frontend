// import Filter from '@/components/Filter'
import TransactionList from './components/TransactionList'
import { transactionList, RightArrow } from '@/constants/transaction'
import styles from './index.scss'

export default () => {
  return (
    <div className={styles.wrapper}>
      <div>mothn Selector filter</div>
      <div className={styles.financial}>
        <span>See you finacial report</span>
        <img src={RightArrow} alt="right arrow" className={styles.arrow} />
      </div>
      <TransactionList list={transactionList} />
    </div>
  )
}
