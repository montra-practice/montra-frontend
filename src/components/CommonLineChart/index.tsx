import * as echarts from 'echarts/core'
import { GridComponent, GridComponentOption } from 'echarts/components'
import { LineChart, LineSeriesOption } from 'echarts/charts'
import { UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
import { useEffect } from 'react'
import styles from './index.scss'

const CommonLineChart = () => {
  echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition])
  type EChartsOption = echarts.ComposeOption<
    GridComponentOption | LineSeriesOption
  >

  const dom = document.getElementById('chart')

  useEffect(() => {
    document.title = 'Financial Report Detail'

    const options: EChartsOption = {
      color: '#7F3DFF',
      grid: {
        top: 10,
        bottom: 10,
        left: 0,
        right: 0,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        show: false,
        boundaryGap: false,
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          data: [220, 932, 901, 534, 1290, 390, 1320],
          type: 'line',
          smooth: true,
          symbol: 'none',
          lineStyle: {
            width: 6,
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: 'rgba(139, 80, 255, 0.24)',
                },
                {
                  offset: 1,
                  color: 'rgba(139, 80, 255, 0)',
                },
              ],
            },
          },
        },
      ],
    }

    if (dom) {
      const chart = echarts.init(dom)
      chart.setOption(options)
      return () => {
        chart.dispose()
      }
    }
  }, [dom])

  return <div id="chart" className={styles.box} data-testid="chartBox"></div>
}
export default CommonLineChart
