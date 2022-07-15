import { ArrowDownIcon } from '@/assets/icons/home_icons'
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

const Select = ({ defaultValue, options = [] }: IProps) => {
  const [selection, setSelection] = useState(defaultValue)
  const [visibility, setVisibility] = useState(false)

  const selectionChange = (item: Item) => {
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

  return (
    <div
      tabIndex={0}
      className={styles.select}
      onClick={() => setVisibility(true)}
      onBlur={() => setVisibility(false)}
    >
      <div className={styles.selectHeader}>
        {ArrowDownIcon()}
        <div>{computValue()}</div>
      </div>
      {visibility && (
        <div className={styles.options}>
          {options &&
            options.map((item) => {
              return (
                <div
                  key={item.key}
                  className={
                    item.key === selection ? styles.selected : styles.item
                  }
                  onClick={() => selectionChange(item)}
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
