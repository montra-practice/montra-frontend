import Select from '@/components/Select'
import TransactionList from '@/components/TransactionList'
import { selectOptions, transactionList } from '@/constants/transaction'
import LineChartActiveIcon from '@/assets/icons/line_chart_active.svg'
import PieChartActiveIcon from '@/assets/icons/pie_chart_active.svg'
import SortIcon from '@/assets/icons/sort.svg'
import LineChartIcon from '@/assets/icons/line_chart.svg'
import PieChartIcon from '@/assets/icons/pie_chart.svg'
import { NavBar } from 'antd-mobile'
import { useParams, useNavigate } from 'react-router-dom'
import styles from './index.scss'
import { useEffect, useState } from 'react'
import CategoryBar from '@/components/CategoryBar'
import CommonLineChart from '@/components/CommonLineChart'
import CommonRingChart from '@/components/CommonRingChart'

const ReportDetail = () => {
  const params = useParams()
  const period = params.period

  const navigate = useNavigate()
  const [activeChart, toogleChart] = useState(0)
  const [activeTab, toogleTab] = useState(0)
  const [, setPeriod] = useState(period)
  const [type, setType] = useState('1')

  useEffect(() => {
    document.title = 'Financial Report Detail'
  }, [])

  const goBack = () => {
    navigate(`/financial-report/${period}`)
  }

  const switchChart = () => {
    toogleChart(activeChart === 0 ? 1 : 0)
  }

  const switchTab = () => {
    toogleTab(activeTab === 0 ? 1 : 0)
  }

  const sortData = () => {}

  const typeOptions = [
    {
      value: '1',
      label: 'Transaction',
    },
    {
      value: '2',
      label: 'Category',
    },
  ]

  const selectionChange = (item: IOption) => {
    setPeriod(item.value)
  }

  const typeSelectionChange = (item: IOption) => {
    setType(item.value)
  }

  return (
    <>
      <NavBar onBack={goBack} className={styles.header}>
        Financial Report
      </NavBar>
      <div className={styles.switch}>
        <Select
          size="small"
          arrow="left"
          options={selectOptions}
          defaultValue={period}
          onSelect={selectionChange}
        ></Select>
        <div>
          <img
            src={activeChart ? LineChartIcon : LineChartActiveIcon}
            alt="line chart"
            onClick={switchChart}
          />
          <img
            src={activeChart ? PieChartActiveIcon : PieChartIcon}
            alt="pie chart"
            onClick={switchChart}
            data-testid="pieChart"
          />
        </div>
      </div>
      {activeChart === 0 && <div className={styles.money}>$ 332</div>}
      <div
        className={styles.chart}
        style={{ height: activeChart === 0 ? '165px' : '210px' }}
      >
        {activeChart === 0 && <CommonLineChart />}
        {activeChart === 1 && <CommonRingChart />}
      </div>
      <div className={styles.tab}>
        <div
          className={!activeTab ? styles['active-tab'] : ''}
          onClick={switchTab}
        >
          Expense
        </div>
        <div
          className={activeTab ? styles['active-tab'] : ''}
          onClick={switchTab}
        >
          Income
        </div>
      </div>
      <div className={styles.filter}>
        <Select
          size="small"
          arrow="left"
          options={typeOptions}
          defaultValue={type}
          onSelect={typeSelectionChange}
        ></Select>
        <img src={SortIcon} alt="sort icon" onClick={sortData} />
      </div>
      <div className={styles.list}>
        {type === '1' && <TransactionList list={transactionList[0].list} />}
        {type === '2' &&
          transactionList[1].list.map((item) => <CategoryBar {...item} />)}
      </div>
    </>
  )
}
export default ReportDetail
