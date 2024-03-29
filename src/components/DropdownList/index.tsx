// dropdownlist created for category selecting
import { Collapse, CheckList } from 'antd-mobile'
import { ArrowRight } from '@/constants/transaction'
import styles from './index.scss'
interface IChecklistItem {
  value: string
  label: string
}
interface IDropDownList {
  title: string
  value: string[]
  options: IChecklistItem[]
  onChange: (val: string[]) => void
  showSelectedNum?: boolean
}

export default (props: IDropDownList) => {
  const title = (
    <div className={styles.row}>
      <span className={styles.title}>{props.title}</span>
      {props.showSelectedNum && (
        <span className={styles.selected}>{props.value.length} Selected</span>
      )}
    </div>
  )

  const arrow = (active: boolean) =>
    active ? (
      <img
        src={ArrowRight}
        alt="down arrow"
        className={`${
          props.showSelectedNum ? styles['arrow-down'] : styles['arrow-up']
        }`}
      />
    ) : (
      <img
        src={ArrowRight}
        alt="right arrow"
        className={`${
          props.showSelectedNum ? styles['arrow-right'] : styles['arrow-down']
        }`}
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
        data-testid="checkPanel"
      >
        <CheckList
          multiple
          onChange={handleChange}
          value={props.value}
          data-testid="checkList"
        >
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
