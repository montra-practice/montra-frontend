import styles from './index.scss'
import { CategoryTypeIcons, TRANSACTION_TYPES } from '@/constants/transaction'
import { useNavigate } from 'react-router-dom'

interface IListItem extends ITransaction {
  transId: string
  transType: string
}
interface IPropsData {
  list: IListItem[]
  date?: string
}

export default (props: IPropsData) => {
  const navigate = useNavigate()
  const jumpToDetail = (transId: string) => {
    navigate(`/transaction_detail/${transId}`)
  }

  const RenderMoney = (type: string, amount: string | number) => {
    switch (type) {
      case TRANSACTION_TYPES.INCOME:
        return `+${amount}`
      case TRANSACTION_TYPES.EXPENSE:
        return `-${amount}`
      default:
        return amount
    }
  }

  return (
    <div className={styles['list-wrapper']}>
      {props.date && <div className={styles['create-date']}>{props.date}</div>}
      {props.list &&
        props.list.map((item) => (
          <div
            className={styles['item-wrapper']}
            key={item.transId}
            data-testid="listDiv"
            onClick={() => jumpToDetail(item.transId)}
          >
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
                <div className={styles[item.transType.toLocaleLowerCase()]}>
                  {RenderMoney(item.transType, item.money)}
                </div>
                <div className={styles['cate-desc']}>{item.time}</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}
