import Select from '@/components/Select'
import TransactionList from '@/components/TransactionList'
import { transactionList } from '@/constants/transaction'
import LineChartActiveIcon from '@/assets/icons/line_chart_active.svg'
import PieChartActiveIcon from '@/assets/icons/pie_chart_active.svg'
import SortIcon from '@/assets/icons/sort.svg'
import LineChartIcon from '@/assets/icons/line_chart.svg'
import PieChartIcon from '@/assets/icons/pie_chart.svg'
import { NavBar } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'
import styles from './index.scss'
import { useContext, useEffect, useState } from 'react'
import CategoryBar from '@/components/CategoryBar'
import CommonLineChart from '@/components/CommonLineChart'
import CommonRingChart from '@/components/CommonRingChart'
import { PeriodSelectionContext } from '@/App'

const ReportDetail = () => {
  const { selection, renderSelect, setSelection } = useContext(
    PeriodSelectionContext,
  )

  const navigate = useNavigate()
  const [activeChart, toogleChart] = useState(0)
  const [activeTab, toogleTab] = useState(0)
  const [, setPeriod] = useState(selection)
  const [type, setType] = useState('1')

  useEffect(() => {
    document.title = 'Financial Report Detail'
  }, [])

  const goBack = () => {
    navigate('/transaction')
  }

  const switchChart = () => {
    toogleChart(activeChart === 0 ? 1 : 0)
  }

  const switchTab = () => {
    toogleTab(activeTab === 0 ? 1 : 0)
  }

  const sortData = () => {
    console.log('sort data')
  }

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
    setSelection(item.value)
  }

  const typeSelectionChange = (item: IOption) => {
    setType(item.value)
  }

  return (
    <>
      <NavBar onBack={goBack} className={styles.header} data-testid="naviBar">
        Financial Report
      </NavBar>
      <div className={styles.switch}>
        {renderSelect(selection, selectionChange)}
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
        style={{
          height: activeChart === 0 ? '165px' : '210px',
        }}
        data-testid="chartDiv"
      >
        {activeChart === 0 && <CommonLineChart />}
        {activeChart === 1 && <CommonRingChart />}
      </div>
      <div className={styles.tab}>
        <div
          className={!activeTab ? styles['active-tab'] : ''}
          onClick={switchTab}
          data-testid="tabDiv"
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
          data-testid="typeSelect"
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
