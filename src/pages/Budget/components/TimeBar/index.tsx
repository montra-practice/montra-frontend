import { useEffect, useState, ReactNode } from 'react'
import styles from './index.scss'
import './fade.css'
import { LeftOutline, RightOutline } from 'antd-mobile-icons'
import { MonthEnglish } from '@/constants/base'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

interface ITimeBar {
  children?: ReactNode
  onSelected: (val: IMonth) => void
  selectedMonth?: IMonth
}
export interface IMonth {
  value: string
  label: string
}
export default function TimeBar({ selectedMonth, onSelected }: ITimeBar) {
  const currentMonth = new Date().getMonth()
  const [month, setMonth] = useState(selectedMonth)
  const getJudgeMonth = (month: number) => {
    console.log(month)
    MonthEnglish.forEach((item) => {
      if (item && item.value === month + '') {
        setMonth(item)
        console.log(item)
        onSelected(item)
      }
    })
  }
  const handleMonth = (type: string) => {
    let monthValue = month && parseInt(month.value)
    if (!monthValue && monthValue !== 0) return
    //console.log(type, monthValue)
    if (type === 'pre') {
      monthValue > 0 && monthValue--
    } else {
      monthValue < 12 && monthValue++
    }
    getJudgeMonth(monthValue)
  }

  useEffect(() => {
    !selectedMonth && getJudgeMonth(currentMonth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div className={styles['time-bar']}>
      <LeftOutline onClick={() => handleMonth('pre')} data-testid="left" />
      <SwitchTransition>
        <CSSTransition key={month?.value} classNames="fade" timeout={300}>
          <div>{month?.label}</div>
        </CSSTransition>
      </SwitchTransition>
      <RightOutline onClick={() => handleMonth('next')} data-testid="right" />
    </div>
  )
}
