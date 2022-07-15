import { Card, Button, Mask } from 'antd-mobile'
import Selector from '../Selector'
import DropdownList from '../DropdownList'
import { filterOptions, sortOptions } from '@/constants/transaction'
import styles from './index.scss'

type FilterProps = {
  visible: boolean
  hideFilter: (show: boolean) => void
}

export default (props: FilterProps) => {
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
          <div className={styles.title}>Fitler Title</div>
          <Button className={styles['reset-btn']}>Reset</Button>
        </div>
        <div className={styles['row-gap']}>
          <div className={`${styles.title} ${styles.padding}`}>Fillter By</div>
          <Selector options={filterOptions} />
        </div>
        <div className={styles['row-gap']}>
          <div className={`${styles.title} ${styles.padding}`}>Sort By</div>
          <Selector options={sortOptions} />
        </div>
        <div className={styles['row-gap']}>
          <div className={`${styles.title} ${styles.padding}`}>Category</div>
          <DropdownList title="Category Type" />
        </div>
      </Card>
    </Mask>
  )
}
