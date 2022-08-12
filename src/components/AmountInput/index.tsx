import { Input } from 'antd-mobile'
import styles from './index.scss'
import { checkMountInput } from '@/utils/common'
import { useState } from 'react'

interface IInputProps {
  amount: string
  handleAmount: (v: string) => void
  placeholder?: string
  className?: string
  title?: string
}

const AmountInput = (props: IInputProps) => {
  const initAmount = props.amount
  const [amountNum, setAmountNum] = useState(initAmount)

  const onAmountChange = (val: string) => {
    if (val === '') {
      setAmountNum('')
    } else if (checkMountInput(val)) {
      setAmountNum(val)
    } else {
      return
    }
  }

  const handleClear = () => {
    setAmountNum('')
  }

  const handleOnBlur = () => {
    props.handleAmount?.(amountNum)
  }

  return (
    <div className={props.className}>
      <div className={styles.alert}>{props.title || 'How much?'}</div>
      <div className={styles.row}>
        <span className={styles.dollar}>$</span>
        <Input
          placeholder={props.placeholder}
          className={styles.input}
          onChange={onAmountChange}
          onBlur={handleOnBlur}
          value={amountNum}
          clearable
          onClear={handleClear}
          type="number"
        />
      </div>
    </div>
  )
}

AmountInput.defaultProps = {
  placeholder: '0',
  amount: '',
}

export default AmountInput
