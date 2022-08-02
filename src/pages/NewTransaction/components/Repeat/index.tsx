import { List, Switch, Button, Mask, Toast } from 'antd-mobile'
import { useState } from 'react'
import BottomCard from '@/components/BottomCard'
import Select from '@/components/Select'
import { selectOptions, selectEndAfterTimes } from '@/constants/transaction'
import { MonthEnglish } from '@/constants/base'
import { getDatesByMonth } from '@/utils/common'
import styles from './index.scss'

interface IRepeat {
  repeat?: boolean
  frequency?: string
  endAfter?: string
}

export default (props: IRepeat) => {
  const initSelectItem = { value: '', label: '' }
  const initRepeatDesc = 'Repeat transaction'

  const curDate = new Date()
  const defaultMoth = String(curDate.getMonth())
  const defaultDate = String(curDate.getDate())

  const [repeatDesc, setRepeatDesc] = useState(initRepeatDesc)
  const [switchCheck, setSwitchCheck] = useState(false)
  const [freqVisible, setFreqVisible] = useState(false)
  const [frequency, setFrequency] = useState(initSelectItem)
  const [endAfter, setEndAfter] = useState(initSelectItem)
  const [next, setNext] = useState(false)
  const [month, setMoth] = useState(defaultMoth)
  const [date, setDate] = useState(defaultDate)
  console.log('22')
  const [dateOptions, setDateOptions] = useState(getDatesByMonth())

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

  const handleMonthCheck = (item: any) => {
    setDateOptions(getDatesByMonth(item.value))
    setMoth(item.value)
    setDate('1')
  }

  const handleDateCheck = (item: any) => {
    setDate(item.value)
  }

  // const fullDate = () => {

  // }

  const FreqEndAfterDom = (frequency: string, endAfter: string) => {
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
      if (frequency.value && endAfter.value) {
        setNext(true)
      } else {
        Toast.show('Frequency and End Master must be chosen!')
      }
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
            description={FreqEndAfterDom(frequency.label, endAfter.label)}
          >
            {FreqEndAfterDom('Frequency', 'EndAfter')}
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
                defaultLabel="Frequency"
                options={selectOptions}
                onSelect={handleFreqSelect}
              ></Select>
              <Select
                defaultLabel="End After"
                options={selectEndAfterTimes}
                onSelect={handleEndAfterSelect}
              ></Select>
            </div>
          ) : (
            <div className={styles['select-wrapper']}>
              <div className={styles.between}>
                <Select
                  size="middle"
                  options={selectOptions}
                  defaultValue={frequency.value}
                  disabled
                ></Select>
                <Select
                  size="middle"
                  options={MonthEnglish}
                  defaultValue={month}
                  onSelect={handleMonthCheck}
                ></Select>
                <Select
                  size="middle"
                  options={dateOptions}
                  defaultValue={date}
                  onSelect={handleDateCheck}
                ></Select>
              </div>
              <div className={styles.between}>
                <Select
                  size="middle"
                  options={selectEndAfterTimes}
                  defaultValue={endAfter.value}
                  disabled
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
