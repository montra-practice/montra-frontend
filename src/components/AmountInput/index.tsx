import { Input } from 'antd-mobile'
import styles from './index.scss'
import { checkMountInput } from '@/utils/common'

interface IInputProps {
  amount: string
  handleAmount: (v: string) => void
  placeholder?: string
  className?: string
}

export default (props: IInputProps) => {
  const onAmountChange = (e: any) => {
    const isCheck = checkMountInput(e.target.value)
    console.log('isCheck', isCheck)
  }
  return (
    <div className={props.className}>
      <div className={styles.alert}>How much?</div>
      <div className={styles.row}>
        <span className={styles.dollar}>$</span>
        <Input
          placeholder={props.placeholder}
          className={styles.input}
          value={props.amount}
          onChange={onAmountChange}
          clearable
        />
      </div>
    </div>
  )
}
