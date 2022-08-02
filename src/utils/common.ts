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

  console.log(year, curMonth, 'days:', days, dates)

  return dates
}
