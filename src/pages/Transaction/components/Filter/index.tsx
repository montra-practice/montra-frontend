import { Card, Button, Mask } from 'antd-mobile'
import Selector from '../Selector'
import DropdownList from '../DropdownList'
import {
  filterOptions,
  sortOptions,
  categoryTypes,
} from '@/constants/transaction'
import styles from './index.scss'

// import { useState } from 'react'

interface IFilterProps {
  visible: boolean
  hideFilter: (show: boolean) => void
}

export default (props: IFilterProps) => {
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
          <Button className={styles['reset-btn']}>Reset</Button>
        </div>
        <div className={styles['row-gap']}>
          <div className={`${styles.title} ${styles.padding}`}>Filter By</div>
          <Selector options={filterOptions} />
        </div>
        <div className={styles['row-gap']}>
          <div className={`${styles.title} ${styles.padding}`}>Sort By</div>
          <Selector options={sortOptions} />
        </div>
        <div className={styles['row-gap']}>
          <div className={`${styles.title} ${styles.padding}`}>Category</div>
          <DropdownList title="Category Type" options={categoryTypes} />
        </div>
        <div className={styles['row-gap']}>
          <Button className={styles['apply-btn']}>Apply</Button>
        </div>
      </Card>
    </Mask>
  )
}
