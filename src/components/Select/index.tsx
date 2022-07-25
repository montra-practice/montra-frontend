import styles from './index.scss'
import { ArrowDown } from '@/constants/transaction'
import { useState } from 'react'

interface IOption {
  value: string
  label?: string
}

interface ISelect {
  size: 'large' | 'middle' | 'small'
  arrow: 'right' | 'left'
  options: IOption[]
  onSelect?: (item: IOption) => void
  selectedWithBorder?: boolean
  defaultValue?: string
  defaultLabel?: string
  className?: any
}

function getInitItem(
  value: string | undefined,
  label: string | undefined,
  arr: IOption[],
) {
  let initItem: IOption = { value: '', label: 'Select' }

  value
    ? arr.forEach((item) => {
        if (item.value === value) {
          initItem = { ...item }
        }
      })
    : (initItem.label = label || 'Select')

  return initItem
}

const Select = (props: ISelect) => {
  const initItem = getInitItem(
    props.defaultValue,
    props.defaultLabel,
    props.options,
  )
  const [show, setShow] = useState(false)
  const [checkedItem, setCheckedItem] = useState(initItem)

  const handleSelect = () => {
    setShow(!show)
  }

  const selectItem = (item: any) => {
    setCheckedItem(item)
    setShow(false)
    props.onSelect && props.onSelect(item)
  }

  return (
    <div
      tabIndex={0}
      className={`${styles[props.size]} ${props.className}`}
      onBlur={() => setShow(false)}
    >
      <div
        className={`${styles.header} ${styles[props.arrow]}`}
        onClick={handleSelect}
      >
        {props.selectedWithBorder ? (
          <div className={styles['cate-type-box']}>
            <div className={styles['cate-type-icon']}></div>
            <div className={styles['cat-type-title']}>{checkedItem.label}</div>
          </div>
        ) : (
          <div className={styles.title}>{checkedItem.label}</div>
        )}

        <img
          src={ArrowDown}
          alt="icon"
          data-testid="arrow"
          className={`${styles.arrow} ${show ? styles['arrow-rotate'] : ''}`}
        />
      </div>
      {show && (
        <div className={styles.content}>
          {props.options.map((item) => (
            <div
              className={
                checkedItem.value === item.value ? styles.selected : styles.item
              }
              onClick={() => selectItem(item)}
              key={item.value}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

Select.defaultProps = {
  size: 'large',
  arrow: 'right',
  selectedWithBorder: false,
}

export default Select
