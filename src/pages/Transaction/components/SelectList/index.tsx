import styles from './index.scss'
import { ArrowDown } from '@/constants/transaction'
import { useState } from 'react'
import { List } from 'antd-mobile'

interface IOption {
  value: string
  label?: string
}

interface ISelectList {
  defaultValue?: string
  defaultLabel?: string
  className?: any
  size: 'large' | 'middle' | 'small'
  arrowRight?: boolean
  selectedWithBorder?: boolean
  options: IOption[]
  onSelect?: (item: IOption) => void
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

const SelectList = (props: ISelectList) => {
  const initItem = getInitItem(
    props.defaultValue,
    props.defaultLabel,
    props.options,
  )
  const [show, setShow] = useState(false)
  const [checkedItem, setCheckedItem] = useState(initItem)

  const handleSelect = (active: boolean) => {
    setShow(!active)
  }

  const selectItem = (item: any) => {
    setCheckedItem(item)
    setShow(false)
    props.onSelect && props.onSelect(item)
  }

  return (
    <div>
      <div className={`${styles[props.size]} ${props.className}`}>
        <div
          className={`${styles.row} ${
            props.arrowRight ? '' : styles['arrow-left']
          }`}
          onClick={() => handleSelect(show)}
        >
          {props.selectedWithBorder ? (
            <div className={styles['cate-type-box']}>
              <div className={styles['cate-type-icon']}></div>
              <div className={styles['cat-type-title']}>
                {checkedItem.label}
              </div>
            </div>
          ) : (
            <div className={styles.title}>{checkedItem.label}</div>
          )}

          <img
            src={ArrowDown}
            alt="icon"
            data-testid="arrow"
            className={`${styles.arrow} ${show ? styles['arrow-rotate'] : ''}`}
          ></img>
        </div>
      </div>
      {show && (
        <List mode="card" className={styles.content}>
          {props.options.map((item) => (
            <List.Item
              className={styles.item}
              onClick={() => selectItem(item)}
              key={item.value}
              arrow={false}
            >
              {item.label}
            </List.Item>
          ))}
        </List>
      )}
    </div>
  )
}

SelectList.defaultProps = {
  size: 'large',
  arrowRight: true,
  selectedWithBorder: false,
}

export default SelectList
