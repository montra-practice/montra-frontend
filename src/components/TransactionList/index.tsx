import styles from './index.scss'
import { CategoryTypeIcons } from '@/utils/consts'

type List = {
  date?: string
  id: number | string // type id
  type: string
  desc: string
  money: number | string
  time: string
}

type PropsData = {
  list: List[]
}

export default (props: PropsData) => {
  return (
    <>
      {props.list &&
        props.list.map((item) => (
          <div className={styles['list-wrapper']}>
            {item.date && (
              <div className={styles['create-date']}>{item.date}</div>
            )}
            <div className={styles['item-wrapper']}>
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
          </div>
        ))}
    </>
  )
}
