import { List, Switch, Button, Mask, Toast } from 'antd-mobile'
import { useEffect, useState } from 'react'
import BottomCard from '@/components/BottomCard'
import Select from '@/components/Select'
import { selectOptions, selectEndAfterTimes } from '@/constants/transaction'
import { MonthEnglish } from '@/constants/base'
import { getDatesByMonth, getEndAfterTime } from '@/utils/common'
import styles from './index.scss'

interface IRepeat {
  repeat?: boolean
  frequency?: string
  endAfter?: string
  onRepeat?: (data: any) => void
}

export default (props: IRepeat) => {
  const initFrequency = { value: '1', label: 'Monthly' }
  const initEndAfter = { value: '1', label: '1' }
  const initRepeatDesc = 'Repeat transaction'

  const curDate = new Date()
  const defaultMoth = String(curDate.getMonth())
  const defaultDate = String(curDate.getDate())

  const [repeatDesc, setRepeatDesc] = useState(initRepeatDesc)
  const [switchCheck, setSwitchCheck] = useState(props.repeat)
  const [freqVisible, setFreqVisible] = useState(false)
  const [frequency, setFrequency] = useState(initFrequency)
  const [endAfter, setEndAfter] = useState(initEndAfter)
  const [month, setMoth] = useState(defaultMoth)
  const [date, setDate] = useState(defaultDate)
  const [dateOptions, setDateOptions] = useState(getDatesByMonth())
  const [fullDate, setFullDate] = useState('')

  const handleSwitchCheck = (val: boolean) => {
    setSwitchCheck(val)
    if (val) {
      setRepeatDesc('Repeat transaction, set your own time')
    } else {
      setRepeatDesc(initRepeatDesc)
      setFrequency(initFrequency)
      setEndAfter(initEndAfter)
    }

    setFreqVisible(val)
  }

  const handleFreqSelect = (item: any) => {
    console.log('freq', item)
    setFrequency(item)
    handleEndAfterDate(month, date, item.value, endAfter.value)
  }

  const handleEndAfterSelect = (item: any) => {
    setEndAfter(item)
    handleEndAfterDate(month, date, frequency.value, item.value)
  }

  const handleMaskClick = () => {
    setFreqVisible(false)
  }

  const handleMonthCheck = (item: any) => {
    setMoth(item.value)
    setDateOptions(getDatesByMonth(item.value))
    handleEndAfterDate(item.value, date, frequency.value, endAfter.value)
  }

  const handleDateCheck = (item: any) => {
    setDate(item.value)
    handleEndAfterDate(month, item.value, frequency.value, endAfter.value)
  }

  const FreqEndAfterDom = (frequency: string, endAfter: string) => {
    return (
      <div className={styles.row}>
        <div className={styles['row-item']}>{frequency}</div>
        <div className={styles['row-item']}>{endAfter}</div>
      </div>
    )
  }

  const handleEndAfterDate = (
    curMonth: string,
    curDate: string,
    curFreq: string,
    curEndAfter: string,
  ) => {
    setFullDate(getEndAfterTime(curMonth, curDate, curFreq, curEndAfter))
  }

  const handleNext = () => {
    if (frequency.value && endAfter.value) {
      props.onRepeat?.({ frequency, endAfter, month, date, fullDate })
      setFreqVisible(false)
    } else {
      Toast.show('Frequency and End Master must be selected!')
    }
  }

  useEffect(() => {
    handleEndAfterDate(month, date, frequency.value, endAfter.value)
  }, [])

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
            description={FreqEndAfterDom(
              `${frequency.label}-${MonthEnglish[Number(month)].label} ${date}`,
              fullDate,
            )}
          >
            {FreqEndAfterDom('Frequency', 'EndAfter')}
          </List.Item>
        )}
      </List>
      <Mask opacity="thin" visible={freqVisible} onMaskClick={handleMaskClick}>
        <BottomCard>
          <div className={styles['select-wrapper']}>
            <div className={styles.item}>
              <div className={styles.title}>Start:</div>
              <div className={styles.between}>
                <div className={styles['between-item']}>
                  <div className={styles['item-name']}>Month:</div>
                  <Select
                    size="middle"
                    options={MonthEnglish}
                    defaultValue={month}
                    onSelect={handleMonthCheck}
                  ></Select>
                </div>
                <div className={styles['between-item']}>
                  <div className={styles['item-name']}>Date:</div>
                  <Select
                    size="middle"
                    options={dateOptions}
                    defaultValue={date}
                    onSelect={handleDateCheck}
                  ></Select>
                </div>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>Frequency:</div>
              <Select
                defaultValue={frequency.value}
                options={selectOptions}
                onSelect={handleFreqSelect}
              ></Select>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>End After Times:</div>
              <Select
                defaultValue={endAfter.value}
                options={selectEndAfterTimes}
                onSelect={handleEndAfterSelect}
              ></Select>
            </div>
            <div className={styles.item}>
              <div className={styles.title}>End by:</div>
              <div className={styles.between}>
                <div className={styles.date}>{fullDate}</div>
              </div>
            </div>
          </div>

          <Button className="btn-big" onClick={handleNext}>
            Next
          </Button>
        </BottomCard>
      </Mask>
    </>
  )
}
