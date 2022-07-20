import styles from './index.scss'
import { ArrowDown } from '@/constants/transaction'
import { useState } from 'react'
import { List } from 'antd-mobile'

interface IOption {
  value: string
  label: string
}

interface ISelectList {
  className?: any
  long?: boolean
  arrowRight?: boolean
  selectedWithBorder?: boolean
  options: IOption[]
}

const SelectList = (props: ISelectList) => {
  const [show, setShow] = useState(false)
  const [checkedItem, setCheckedItem] = useState({ value: 1, label: 'Test' })

  const handleSelect = (active: boolean) => {
    setShow(!active)
  }

  const selectItem = (item: any) => {
    setCheckedItem(item)
    setShow(false)
  }

  return (
    <div
      className={`${props.className} ${
        props.long ? styles['select-long'] : styles['select-short']
      }`}
    >
      <div
        className={`${styles.row} ${
          props.arrowRight ? '' : styles['arrow-left']
        }`}
        onClick={() => handleSelect(show)}
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
        ></img>
      </div>
      {/* {show && (
        <div className={styles.content}>
          {props.options.map((item) => (
            <div
              className={styles.item}
              onClick={() => selectItem(item)}
              key={item.value}
            >
              {item.label}
            </div>
          ))}
        </div>
      )} */}
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
  long: true,
  arrowRight: true,
  selectedWithBorder: false,
}

export default SelectList
