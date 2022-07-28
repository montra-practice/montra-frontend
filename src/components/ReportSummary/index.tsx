import { CategoryTypeIcons } from '@/constants/transaction'
import styles from './index.scss'
interface Iprops {
  period: string
  title: string
  total: string
  subTitle: string
  biggestType: number
  biggestTypeName: string
  biggestMoney: string
}

const ReportSummary = ({
  period,
  title,
  total,
  subTitle,
  biggestType,
  biggestTypeName,
  biggestMoney,
}: Iprops) => {
  return (
    <div className={styles.type}>
      <div className={styles.time}>{period}</div>
      <div className={styles.title}>{title}</div>
      <div className={styles.money}>{total}</div>
      <div className={styles.box}>
        <div>{subTitle}</div>
        <div>
          <img src={CategoryTypeIcons[biggestType]} alt="category type img" />
          <span>{biggestTypeName}</span>
        </div>
        <div>{biggestMoney}</div>
      </div>
    </div>
  )
}

export default ReportSummary
