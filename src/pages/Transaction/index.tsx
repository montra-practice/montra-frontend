import Filter from './components/Filter'
import TransactionList from './components/TransactionList'
import { transactionList, RightArrow } from '@/constants/transaction'
import styles from './index.scss'
import FilterIcon from '@/assets/icons/filter.png'

import { useState } from 'react'

export default () => {
  const [showFilter, setShow] = useState(false)

  const handleFilterShow = (show: boolean) => {
    setShow(!show)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <div>Seletor</div>
        <img
          src={FilterIcon}
          alt="filter icon"
          className={styles['filter-icon']}
          onClick={() => handleFilterShow(showFilter)}
        ></img>
        {showFilter && (
          <Filter hideFilter={handleFilterShow} visible={showFilter}></Filter>
        )}
      </div>

      <div className={styles.financial}>
        <span>See you financial report</span>
        <img src={RightArrow} alt="right arrow" className={styles.arrow} />
      </div>

      {transactionList.map((list) => (
        <TransactionList {...list} key={list.date} />
      ))}
    </div>
  )
}