import { Card, Button, Mask } from 'antd-mobile'
import { Selector } from 'antd-mobile'
import DropdownList from '../DropdownList'
import {
  filterOptions,
  sortOptions,
  categoryTypes,
} from '@/constants/transaction'
import styles from './index.scss'
import { useState } from 'react'
interface IFilterProps {
  visible: boolean
  hideFilter: (show: boolean) => void
}

export default (props: IFilterProps) => {
  const [filter, setFilter] = useState([])
  const [sorter, setSorter] = useState([])
  const [cateType, setCateType] = useState([])

  const handleReset = () => {
    setFilter([])
    setSorter([])
    setCateType([])
  }

  const handleFilter = (val: any) => {
    setFilter(val)
  }

  const handleSorter = (val: any) => {
    setSorter(val)
  }

  const handleCateType = (val: any) => {
    setCateType(val)
  }

  const handleApply = () => {}

  return (
    <Mask
      opacity="thin"
      visible={props.visible}
      data-testid="filterMask"
      onMaskClick={() => props.hideFilter(props.visible)}
    >
      <Card className={styles.wrapper}>
        <div className={styles.icon}></div>
        <div className={`${styles.row} ${styles['row-gap']}`}>
          <div className={styles.title}>Filter Transaction</div>
          <Button className={styles['reset-btn']} onClick={handleReset}>
            Reset
          </Button>
        </div>
        <div className={styles['row-gap']}>
          <div className={`${styles.title} ${styles.padding}`}>Filter By</div>
          <Selector
            options={filterOptions}
            multiple
            showCheckMark={false}
            onChange={handleFilter}
            value={filter}
          />
        </div>
        <div className={styles['row-gap']}>
          <div className={`${styles.title} ${styles.padding}`}>Sort By</div>
          <Selector
            options={sortOptions}
            multiple
            showCheckMark={false}
            onChange={handleSorter}
            value={sorter}
          />
        </div>
        <div className={styles['row-gap']}>
          <div className={`${styles.title} ${styles.padding}`}>Category</div>
          <DropdownList
            title="Category Type"
            options={categoryTypes}
            onChange={handleCateType}
            value={cateType}
            showSelectedNum={true}
          />
        </div>
        <div className={styles['row-gap']}>
          <Button className="btn-big" onClick={handleApply}>
            Apply
          </Button>
        </div>
      </Card>
    </Mask>
  )
}
