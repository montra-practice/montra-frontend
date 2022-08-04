import { Card, Button, Mask } from 'antd-mobile'
import { Selector } from 'antd-mobile'
import DropdownList from '@/components/DropdownList'
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
  onApply?: (data: any) => void
  defaultValue?: IFilterItems
}

export default (props: IFilterProps) => {
  const [filter, setFilter] = useState(props.defaultValue?.filter)
  const [sorter, setSorter] = useState(props.defaultValue?.sorter)
  const [cateType, setCateType] = useState(props.defaultValue?.cateType)

  const handleReset = () => {
    setFilter([])
    setSorter([])
    setCateType([])
  }

  const handleHideFilter = () => {
    props.hideFilter(props.visible)
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

  const handleApply = () => {
    props.onApply?.({ filter, sorter, cateType })
    handleHideFilter()
  }

  return (
    <Mask
      opacity="thin"
      visible={props.visible}
      data-testid="filterMask"
      onMaskClick={handleHideFilter}
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
