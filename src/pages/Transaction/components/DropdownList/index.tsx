// dropdownlist created for category selecting
import { Collapse, CheckList } from 'antd-mobile'
import { ArrowRight, ArrowDown } from '@/constants/transaction'
import styles from './index.scss'

import { useState } from 'react'

interface IChecklistItem {
  value: string
  label: string
}
interface IDropDownList {
  title: string
  options: IChecklistItem[]
}

export default (props: IDropDownList) => {
  const [selectNum, setSelectNum] = useState(0)

  const title = (
    <div className={styles.row}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.selected}>{selectNum} Selected</span>
    </div>
  )

  const arrow = (active: boolean) =>
    active ? (
      <img src={ArrowDown} alt="down arrow" className={styles['arrow-down']} />
    ) : (
      <img
        src={ArrowRight}
        alt="right arrow"
        className={styles['arrow-right']}
      />
    )

  const handleChange = (val: string[]) => {
    setSelectNum(val.length)
  }

  return (
    <Collapse className={styles['list-header']}>
      <Collapse.Panel
        key="1"
        title={title}
        arrow={arrow}
        className={styles['list-item']}
      >
        <CheckList multiple onChange={handleChange}>
          {props.options &&
            props.options.map((item) => (
              <CheckList.Item key={item.value} value={item.value}>
                {item.label}
              </CheckList.Item>
            ))}
        </CheckList>
      </Collapse.Panel>
    </Collapse>
  )
}
