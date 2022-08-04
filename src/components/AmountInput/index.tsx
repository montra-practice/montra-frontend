import { Input } from 'antd-mobile'
import styles from './index.scss'
import { checkMountInput } from '@/utils/common'
import { useState } from 'react'

interface IInputProps {
  amount?: string
  handleAmount: (v: string) => void
  placeholder?: string
  className?: string
}

const AmountInput = (props: IInputProps) => {
  const initAmount = props.amount
  const [amountNum, setAmountNum] = useState(initAmount)
  const onAmountChange = (val: string) => {
    const isAvailable = checkMountInput(val)
    isAvailable ? setAmountNum(val) : setAmountNum('')
  }

  const handleClear = () => {
    setAmountNum('')
  }
  return (
    <div className={props.className}>
      <div className={styles.alert}>How much?</div>
      <div className={styles.row}>
        <span className={styles.dollar}>$</span>
        <Input
          placeholder={props.placeholder}
          className={styles.input}
          value={amountNum}
          onChange={(val) => onAmountChange(val)}
          clearable
          onClear={handleClear}
        />
      </div>
    </div>
  )
}

AmountInput.defaultProps = {
  amount: '0',
}

export default AmountInput
