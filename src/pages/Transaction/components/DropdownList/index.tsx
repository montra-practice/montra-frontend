// dropdownlist created for category selecting
import { Collapse, CheckList } from 'antd-mobile'
import { ArrowRight, ArrowDown } from '@/constants/transaction'
import styles from './index.scss'
interface IChecklistItem {
  value: string
  label: string
}
interface IDropDownList {
  title: string
  value: string[]
  onChange: (val: string[]) => void
  options: IChecklistItem[]
}

export default (props: IDropDownList) => {
  const title = (
    <div className={styles.row}>
      <span className={styles.title}>{props.title}</span>
      <span className={styles.selected}>{props.value.length} Selected</span>
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
    props.onChange(val)
  }

  return (
    <Collapse className={styles['list-header']}>
      <Collapse.Panel
        key="1"
        title={title}
        arrow={arrow}
        className={styles['list-item']}
      >
        <CheckList multiple onChange={handleChange} value={props.value}>
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
