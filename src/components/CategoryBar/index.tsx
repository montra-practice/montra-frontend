import { CategoryTypeColor } from '@/constants/transaction'
import { ProgressBar } from 'antd-mobile'
import styles from './index.scss'

const CategoryBar = ({ id, type, money }: Itransaction) => {
  return (
    <div className={styles.category}>
      <div className={styles.top}>
        <div>
          <div style={{ background: CategoryTypeColor[id] }}></div>
          <span>{type}</span>
        </div>
        <div>- ${money}</div>
      </div>
      <ProgressBar
        percent={20}
        style={{
          '--fill-color': `${CategoryTypeColor[id]}`,
          '--track-width': '14px',
        }}
      />
    </div>
  )
}

export default CategoryBar
