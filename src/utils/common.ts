import { MonthEnglish } from '@/constants/base'
export const getDatesByMonth = (month?: string, year?: string) => {
  const curDate = new Date()
  const curYear = year ? Number(year) : curDate.getFullYear()
  const curMonth = month ? Number(month) + 1 : curDate.getMonth() + 1
  const days = new Date(curYear, curMonth, 0).getDate()

  let dates = []
  for (let i = 1; i <= days; i++) {
    const iString = String(i)
    dates.push({ value: iString, label: iString })
  }

  return dates
}

export const getEndAfterTime = (
  month: string,
  date: string,
  type: string,
  times: string,
) => {
  let curYear = new Date().getFullYear()
  let curMonth = Number(month)
  let curDate = Number(date)
  let numTimes = Number(times)

  const endAfterMoth = curMonth + numTimes
  const endAfterDays = curDate + numTimes * 7
  const endAfterYear = curYear + numTimes
  const tempDate = new Date(curYear, curMonth, curDate)

  if (type === '1') {
    // month
    tempDate.setMonth(endAfterMoth)
  } else if (type === '2') {
    // week
    tempDate.setDate(endAfterDays)
  } else if (type === '3') {
    // year
    tempDate.setFullYear(endAfterYear)
  }

  curYear = tempDate.getFullYear()
  curMonth = tempDate.getMonth()
  curDate = tempDate.getDate()

  const endAfterTime = `${curDate} ${MonthEnglish[curMonth].label} ${curYear}`

  return endAfterTime
}

export const checkMountInput = (value: string) => {
  const reg = /^(0|[1-9][0-9]*)(\.\d{1,2})?$/

  return reg.test(value)
}

export const goBack = () => {
  window.history.back()
}
