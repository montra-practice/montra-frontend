import { Input } from 'antd-mobile'
import styles from './index.scss'

interface IInputProps {
  amount: string
  handleAmount: (v: string) => void
  placeholder?: string
}

export default (props: IInputProps) => {
  return (
    <div>
      <div className={styles.alert}>How much?</div>
      <div className={styles.row}>
        <span className={styles.dollar}>$</span>
        <Input
          placeholder={props.placeholder}
          className={styles.input}
          value={props.amount}
          onChange={(v) => props.handleAmount(v)}
        />
      </div>
    </div>
  )
}
