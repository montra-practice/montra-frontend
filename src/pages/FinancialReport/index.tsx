import ReportSummary from '@/components/ReportSummary'
import {
  CategoryTypeIcons,
  FOOD,
  SALARY,
  selectOptions,
  SHOPPING,
  SUBSCRIPTION,
} from '@/constants/transaction'
import { Button, Swiper } from 'antd-mobile'
import { SwiperRef } from 'antd-mobile/es/components/swiper'
import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './index.scss'

const FinancialReport = () => {
  const swiperRef = useRef<SwiperRef>(null)
  const navigate = useNavigate()
  const [activeIndex, setActiveIndex] = useState(0)
  const params = useParams()
  const period = params.period || '1'
  const periodLabel =
    'This ' + selectOptions.find((option) => option.value === period)?.label

  useEffect(() => {
    document.title = 'Financial Report'
  }, [])

  const tabs = [
    { key: 'expense', backgroundColor: '#fd3c4a' },
    { key: 'income', backgroundColor: '#00A86B' },
    { key: 'budget', backgroundColor: '#7F3DFF' },
    { key: 'quote', backgroundColor: '#7F3DFF' },
  ]

  const swipeTo = (index: number) => () => {
    swiperRef.current?.swipeTo(index)
  }

  const openFullDetail = () => {
    navigate(`/report-detail/${period}`)
  }

  const expenseDetail = {
    period: periodLabel,
    title: 'You Spend 💸',
    total: '$332',
    subTitle: 'and your biggest\n\r spending is from',
    biggestType: 1,
    biggestTypeName: SHOPPING,
    biggestMoney: '$ 120',
  }

  const incomeDetail = {
    period: periodLabel,
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
      <Swiper
        loop
        direction="horizontal"
        ref={swiperRef}
        defaultIndex={activeIndex}
        onIndexChange={(index) => {
          setActiveIndex(index)
        }}
        indicator={(total, current) => (
          <div className={styles['custom-indicator']}>
            {tabs.map((tab, index) => (
              <div
                className={index === current ? styles['active-indicator'] : ''}
                key={index}
                onClick={swipeTo(index)}
                data-testid={tab.key}
              ></div>
            ))}
          </div>
        )}
      >
        <Swiper.Item>
          <ReportSummary {...expenseDetail} />
        </Swiper.Item>
        <Swiper.Item>
          <ReportSummary {...incomeDetail} />
        </Swiper.Item>
        <Swiper.Item>
          <div className={styles.type}>
            <div className={styles.time}>{periodLabel}</div>
            <div className={styles.title}>
              4 of 12 Budget is exceeds the limit
            </div>
            <div className={styles.box}>
              {!!budgets.length &&
                budgets.map((budget, i) => (
                  <div className={styles.budgets} key={i}>
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
