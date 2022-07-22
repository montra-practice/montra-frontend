import { Card } from 'antd-mobile'
import styles from './index.scss'
import { ReactNode } from 'react'

interface ICardProps {
  children: ReactNode
  withIcon?: boolean
}

const BottomCard = (props: ICardProps) => {
  return (
    <Card className={styles.wrapper}>
      {props.withIcon && <div className={styles.icon}></div>}
      {props.children}
    </Card>
  )
}

BottomCard.defaultProps = {
  withIcon: true,
}

export default BottomCard
