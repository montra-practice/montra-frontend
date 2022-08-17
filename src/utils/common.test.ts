import {
  getDatesByMonth,
  getEndAfterTime,
  checkMountInput,
  goBack,
} from './common'

describe('Test common functions', () => {
  describe('Test getDatesByMonth', () => {
    it('get current dates', () => {
      const datesByGet = getDatesByMonth()
      const curDate = new Date()
      const curYear = curDate.getFullYear()
      const curMonth = curDate.getMonth() + 1
      const days = new Date(curYear, curMonth, 0).getDate()
      expect(datesByGet).toHaveLength(days)
    })

    it('get dates by moth=3 year=2022', () => {
      // 3 is the index of month, it refers April
      const datesByGet = getDatesByMonth('3', '2022')
      expect(datesByGet).toHaveLength(30)
    })
  })

  describe('Test getEndAfterTime', () => {
    it('getEndAfterTime after 2 months', () => {
      const datesByGet = getEndAfterTime('7', '16', '1', '2')
      expect(datesByGet).toEqual('16 October 2022')
    })
    it('getEndAfterTime after 2 weeks', () => {
      const datesByGet = getEndAfterTime('7', '16', '2', '2')
      expect(datesByGet).toEqual('30 August 2022')
    })

    it('getEndAfterTime after 2 years', () => {
      const datesByGet = getEndAfterTime('7', '16', '3', '2')
      expect(datesByGet).toEqual('16 August 2024')
    })
  })

  describe('Test checkMountInput', () => {
    it('input correctly', () => {
      const correct = checkMountInput('123')
      expect(correct).toBe(true)
    })

    it('input incorrectly', () => {
      const correct = checkMountInput('qbc')
      expect(correct).toBe(false)
    })
  })

  describe('Test go back', () => {
    it('go back', () => {
      const curPathLen = window.history.length
      window.history.forward()
      goBack()
      expect(curPathLen).toEqual(curPathLen)
    })
  })
})
