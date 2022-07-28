import Select from '@/components/Select'
import TransactionList from '@/components/TransactionList'
import { selectOptions, transactionList } from '@/constants/transaction'
import LineChartActiveIcon from '@/assets/icons/line_chart_active.svg'
import PieChartActiveIcon from '@/assets/icons/pie_chart_active.svg'
import SortIcon from '@/assets/icons/sort.svg'
import LineChartIcon from '@/assets/icons/line_chart.svg'
import PieChartIcon from '@/assets/icons/pie_chart.svg'
import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import styles from './index.scss'
import { useState } from 'react'

const ReportDetail = () => {
  const navigate = useNavigate()
  const [activeChart, toogleChart] = useState(0)
  const [activeTab, toogleTab] = useState(0)

  const goBack = () => {
    navigate('/financial-report')
  }

  const switchChart = () => {
    toogleChart(activeChart === 0 ? 1 : 0)
  }

  const switchTab = () => {
    toogleTab(activeTab === 0 ? 1 : 0)
  }

  const sortData = () => {}

  const options = [
    {
      value: '1',
      label: 'Transaction',
    },
    {
      value: '2',
      label: 'Category',
    },
  ]

  return (
    <>
      <NavBar onBack={goBack} className={styles.header}>
        Financial Report
      </NavBar>
      <div className={styles.switch}>
        <Select size="small" arrow="left" options={selectOptions}></Select>
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
          />
        </div>
      </div>
      <div className={styles.money}>$ 332</div>
      <div className={styles.chart}></div>
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
        <Select size="small" arrow="left" options={options}></Select>
        <img src={SortIcon} alt="sort icon" onClick={sortData} />
      </div>
      <div className={styles.list}>
        <TransactionList list={transactionList[0].list} />
      </div>
    </>
  )
}
export default ReportDetail
