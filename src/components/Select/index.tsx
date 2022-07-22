import { ReactComponent as ArrowDownIcon } from '@/assets/icons/arrow_down.svg'
import { useState } from 'react'
import styles from './index.scss'

interface IProps {
  defaultValue: string
  options: Item[]
}

interface Item {
  key: string
  value: string
}

const Select = ({ defaultValue, options }: IProps) => {
  const [selection, setSelection] = useState(defaultValue)
  const [visibility, setVisibility] = useState(false)

  const selectionChange = (item: Item) => () => {
    setSelection(item.key)
    setTimeout(() => {
      setVisibility(false)
      console.log('optionVisible', visibility)
    })
  }

  const computValue = () => {
    const item = options.find((opt) => opt.key === selection)
    return item?.value
  }

  const changeVisibility = (flag: boolean) => () => {
    setVisibility(flag)
  }

  return (
    <div
      tabIndex={0}
      className={styles.select}
      onClick={changeVisibility(true)}
      onBlur={changeVisibility(false)}
      data-testid="header"
    >
      <div className={styles['select-header']}>
        <ArrowDownIcon className={visibility ? styles.rotate : ''} />
        <div>{computValue()}</div>
      </div>
      {visibility && (
        <div className={styles.options} data-testid="options">
          {options &&
            options.map((item) => {
              return (
                <div
                  key={item.key}
                  className={
                    item.key === selection ? styles.selected : styles.item
                  }
                  onClick={selectionChange(item)}
                >
                  {item.value}
                </div>
              )
            })}
        </div>
      )}
    </div>
  )
}

export default Select
