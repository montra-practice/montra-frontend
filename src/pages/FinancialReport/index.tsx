import ReportSummary from '@/components/ReportSummary'
import {
  CategoryTypeIcons,
  FOOD,
  SALARY,
  SHOPPING,
  SUBSCRIPTION,
} from '@/constants/transaction'
import { Button, Swiper, Tabs } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './index.scss'

const FinancialReport = ({ period = 'This Month' }) => {
  const swiperRef = useRef<SwiperRef>(null)
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)

  const tabs = [
    { key: 'expense', backgroundColor: '#fd3c4a' },
    { key: 'income', backgroundColor: '#00A86B' },
    { key: 'budget', backgroundColor: '#7F3DFF' },
    { key: 'quote', backgroundColor: '#7F3DFF' },
  ]

  const tabChange = () => (key: string) => {
    const index = tabs.findIndex((item) => item.key === key)
    setActiveIndex(index)
    swiperRef.current?.swipeTo(index)
  }

  const openFullDetail = () => {
    navigate('/report-detail')
  }

  const expenseDetail = {
    period: period,
    title: 'You Spend 💸',
    total: '$332',
    subTitle: 'and your biggest\n\r spending is from',
    biggestType: 1,
    biggestTypeName: SHOPPING,
    biggestMoney: '$ 120',
  }

  const incomeDetail = {
    period: period,
    title: 'You Earned 💰',
    total: '$6000',
    subTitle: 'your biggest\n\r income is from',
    biggestType: 5,
    biggestTypeName: SALARY,
    biggestMoney: '$ 5000',
  }

  const budgets = [
    { id: 1, type: SHOPPING },
    { id: 2, type: FOOD },
    { id: 1, type: SHOPPING },
    { id: 3, type: SUBSCRIPTION },
  ]

  return (
    <div
      className={styles.wrapper}
      style={{ backgroundColor: tabs[activeIndex].backgroundColor }}
    >
      <Tabs activeKey={tabs[activeIndex].key} onChange={tabChange()}>
        {tabs.map((tab) => (
          <Tabs.Tab title="" key={tab.key} />
        ))}
      </Tabs>
      <Swiper
        direction="horizontal"
        indicator={() => null}
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveIndex(index)
        }}
      >
        <Swiper.Item>
          <ReportSummary {...expenseDetail} />
        </Swiper.Item>
        <Swiper.Item>
          <ReportSummary {...incomeDetail} />
        </Swiper.Item>
        <Swiper.Item>
          <div className={styles.type}>
            <div className={styles.time}>{period}</div>
            <div className={styles.title}>
              2 of 12 Budget is exceeds the limit
            </div>
            <div className={styles.box}>
              {budgets?.length > 0 &&
                budgets.map((budget) => (
                  <div className={styles.budgets}>
                    <img
                      src={CategoryTypeIcons[budget.id]}
                      alt="category type img"
                    />
                    <span>{budget.type}</span>
                  </div>
                ))}
            </div>
          </div>
        </Swiper.Item>
        <Swiper.Item>
          <div className={styles.content}>
            <div>“Financial freedom is freedom from fear.”</div>
            <div>-Robert Kiyosaki</div>
            <Button block color="default" size="large" onClick={openFullDetail}>
              See the full detail
            </Button>
          </div>
        </Swiper.Item>
      </Swiper>
    </div>
  )
}

export default FinancialReport
