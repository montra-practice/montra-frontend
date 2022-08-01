import styles from './index.scss'
import { CategoryTypeIcons } from '@/constants/transaction'

interface IPropsData {
  list: Itransaction[]
  date?: string
}

export default (props: IPropsData) => {
  return (
    <div className={styles['list-wrapper']}>
      {props.date && <div className={styles['create-date']}>{props.date}</div>}
      {props.list &&
        props.list.map((item, index) => (
          <div className={styles['item-wrapper']} key={index}>
            <img
              src={CategoryTypeIcons[item.id]}
              alt="category type img"
              className={styles['cate-icon']}
            />
            <div className={styles['cat-box']}>
              <div>
                <div className={styles['cate-title']}>{item.type}</div>
                <div className={styles['cate-desc']}>{item.desc}</div>
              </div>
              <div>
                <div className={`${styles['money']} ${styles['expense']}`}>
                  {item.money}
                </div>
                <div className={styles['cate-desc']}>{item.time}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
