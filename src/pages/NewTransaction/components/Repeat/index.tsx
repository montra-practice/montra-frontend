import { List, Switch, Button, Mask } from 'antd-mobile'
import { useState } from 'react'
import BottomCard from '@/components/BottomCard'
import Select from '@/components/Select'
import { selectOptions } from '@/constants/transaction'
import styles from './index.scss'

interface IRepeat {
  repeat?: boolean
  frequency?: string
  endAfter?: string
}

export default (props: IRepeat) => {
  const initSelectItem = { value: '', label: '' }
  const initRepeatDesc = 'Repeat transaction'

  const [repeatDesc, setRepeatDesc] = useState(initRepeatDesc)
  const [switchCheck, setSwitchCheck] = useState(false)
  const [freqVisible, setFreqVisible] = useState(false)
  const [frequency, setFrequency] = useState(initSelectItem)
  const [endAfter, setEndAfter] = useState(initSelectItem)
  const [next, setNext] = useState(false)

  const handleSwitchCheck = (val: boolean) => {
    setSwitchCheck(val)
    if (val) {
      setRepeatDesc('Repeat transaction, set your own time')
    } else {
      setRepeatDesc(initRepeatDesc)
      setFrequency(initSelectItem)
      setEndAfter(initSelectItem)
      setNext(false)
    }

    setFreqVisible(val)
  }

  const handleFreqSelect = (item: any) => {
    setFrequency(item)
  }

  const handleEndAfterSelect = (item: any) => {
    setEndAfter(item)
  }

  const handleMaskClick = () => {
    setFreqVisible(false)
    setNext(false)
  }

  const freqEndAfterDom = (frequency: string, endAfter: string) => {
    return (
      <div className={styles.row}>
        <div className={styles['row-item']}>{frequency}</div>
        <div className={styles['row-item']}>{endAfter}</div>
      </div>
    )
  }

  const handleNext = () => {
    if (next) {
      setFreqVisible(false)
      setNext(false)
    } else {
      setNext(true)
    }
  }

  return (
    <>
      <List className={styles.list}>
        <List.Item
          extra={
            <Switch
              checked={switchCheck}
              onChange={(val) => handleSwitchCheck(val)}
            />
          }
          description={repeatDesc}
        >
          Repeat
        </List.Item>
        {switchCheck && (
          <List.Item
            extra={
              <Button
                onClick={() => setFreqVisible(true)}
                className={styles['edit-btn']}
              >
                Edit
              </Button>
            }
            description={freqEndAfterDom(frequency.label, endAfter.label)}
          >
            {freqEndAfterDom('Frequency', 'EndAfter')}
          </List.Item>
        )}
      </List>
      <Mask
        opacity="thin"
        visible={freqVisible}
        onMaskClick={() => handleMaskClick()}
      >
        <BottomCard>
          {!next ? (
            <div className={styles['select-wrapper']}>
              <Select
                options={selectOptions}
                onSelect={handleFreqSelect}
              ></Select>
              <Select
                options={selectOptions}
                onSelect={handleEndAfterSelect}
              ></Select>
            </div>
          ) : (
            <div className={styles['select-wrapper']}>
              <div className={styles.between}>
                <Select
                  size="middle"
                  options={selectOptions}
                  defaultLabel="Frequency"
                  defaultValue={frequency.value}
                ></Select>
                <Select
                  size="middle"
                  options={selectOptions}
                  defaultLabel="Month"
                ></Select>
                <Select
                  size="middle"
                  options={selectOptions}
                  defaultLabel="Date"
                ></Select>
              </div>
              <div className={styles.between}>
                <Select
                  size="middle"
                  options={selectOptions}
                  defaultLabel="Date"
                ></Select>
                <Select
                  size="middle"
                  options={selectOptions}
                  defaultLabel="Full Date"
                ></Select>
              </div>
            </div>
          )}
          <Button className="btn-big" onClick={() => handleNext()}>
            Next
          </Button>
        </BottomCard>
      </Mask>
    </>
  )
}
