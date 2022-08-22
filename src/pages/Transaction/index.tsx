import Filter from '@/components/Filter'
import TransactionList from '@/components/TransactionList'
import { transactionList, ArrowRight } from '@/constants/transaction'
import styles from './index.scss'
import FilterIcon from '@/assets/icons/filter.png'
import { useContext, useEffect, useState } from 'react'
import { Badge } from 'antd-mobile'
import TabFooter from '@/components/TabFooter'
import { useNavigate } from 'react-router-dom'
import { PeriodSelectionContext } from '@/App'
import { ROUTE_PATH } from '../FinancialReport/router'

export default () => {
  const navigate = useNavigate()
  const initFilterData = { filter: [], sorter: [], cateType: [] }
  const [showFilter, setShowFilter] = useState(false)
  const [badgeNum, setBadgeNum] = useState('')
  const [filterData, setFilterData] = useState(initFilterData)

  const { selection, renderSelect, setSelection } = useContext(
    PeriodSelectionContext,
  )

  useEffect(() => {
    document.title = 'Transaction'
  }, [])

  const handleFilterShow = (show: boolean) => {
    setShowFilter(!show)
  }

  const seeReport = () => {
    navigate(ROUTE_PATH.FINANCIAL_REPORT)
  }

  const selectionChange = (item: IOption) => {
    setSelection(item.value)
  }

  const handleApply = (filterData: IFilterItems) => {
    const num =
      filterData.filter.length +
      filterData.sorter.length +
      filterData.cateType.length
    setBadgeNum(num || '')
    setFilterData(filterData)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        {renderSelect(selection, selectionChange)}
        <Badge content={badgeNum} wrapperStyle={{ position: 'initial' }}>
          <img
            src={FilterIcon}
            alt="filter icon"
            className={styles['filter-icon']}
            onClick={() => handleFilterShow(showFilter)}
          />
        </Badge>
        {showFilter && (
          <Filter
            hideFilter={handleFilterShow}
            visible={showFilter}
            onApply={handleApply}
            defaultValue={filterData}
          ></Filter>
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
