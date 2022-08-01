import Filter from '@/components/Filter'
import TransactionList from '@/components/TransactionList'
import {
  transactionList,
  ArrowRight,
  selectOptions,
} from '@/constants/transaction'
import styles from './index.scss'
import FilterIcon from '@/assets/icons/filter.png'
import Select from '@/components/Select'
import { useEffect, useState } from 'react'
import TabFooter from '@/components/TabFooter'
import { useNavigate } from 'react-router-dom'

export default () => {
  const navigate = useNavigate()
  const [showFilter, setShow] = useState(false)
  const [selection, setSelection] = useState('1')

  useEffect(() => {
    document.title = 'Financial Report'
  }, [])

  const handleFilterShow = (show: boolean) => {
    setShow(!show)
  }

  const seeReport = () => {
    navigate(`/financial-report/${selection}`)
  }

  const selectionChange = (item: IOption) => {
    setSelection(item.value)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <Select
          size="small"
          arrow="left"
          options={selectOptions}
          defaultValue={selection}
          onSelect={selectionChange}
        ></Select>
        <img
          src={FilterIcon}
          alt="filter icon"
          className={styles['filter-icon']}
          onClick={() => handleFilterShow(showFilter)}
        />
        {showFilter && (
          <Filter hideFilter={handleFilterShow} visible={showFilter}></Filter>
        )}
      </div>

      <div className={styles.financial} onClick={seeReport}>
        <span>See you financial report</span>
        <img src={ArrowRight} alt="right arrow" className={styles.arrow} />
      </div>

      {transactionList.map((list) => (
        <TransactionList {...list} key={list.date} />
      ))}

      <TabFooter />
    </div>
  )
}
