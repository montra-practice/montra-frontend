import * as echarts from 'echarts/core'
import {
  GridComponent,
  GridComponentOption,
  TooltipComponent,
} from 'echarts/components'
import { PieChart, PieSeriesOption } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { useCallback, useLayoutEffect } from 'react'
import styles from './index.scss'
import { CategoryTypeColor } from '@/constants/transaction'

const CommonRingChart = () => {
  echarts.use([
    GridComponent,
    TooltipComponent,
    PieChart,
    CanvasRenderer,
    UniversalTransition,
  ])
  type EChartsOption = echarts.ComposeOption<
    GridComponentOption | PieSeriesOption
  >
  const dom = document.getElementById('ring-chart')
  const initChart = useCallback(() => {
    const data = [
      { id: '1', value: 1048, name: 'Search Engine' },
      { id: '2', value: 735, name: 'Direct' },
      { id: '3', value: 484, name: 'Union Ads' },
    ]
    const colors = data.map((item) => CategoryTypeColor[item.id])

    const options: EChartsOption = {
      color: colors,
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          bottom: 25,
          radius: ['75%', '100%'],
          avoidLabelOverlap: false,
          label: {
            position: 'center',
            fontWeight: 700,
            fontSize: 32,
            lineHeight: 39,
            formatter: () => '$332',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '12',
            },
          },
          labelLine: {
            show: false,
          },
          data: data,
        },
      ],
    }

    if (dom) {
      const chart = echarts.init(dom)
      chart.setOption(options)
    }
  }, [dom])

  useLayoutEffect(() => {
    document.title = 'Financial Report Detail'
    initChart()
  }, [initChart])

  return (
    <div id="ring-chart" className={styles.box} data-testid="ringBox"></div>
  )
}
export default CommonRingChart
