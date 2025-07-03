import Img from './lineChart.svg'
import type { WidgetConfig } from '@/types'

const widgetConfig: WidgetConfig = {
  type: 'lineChart',
  name: 'LineChartWidget',
  img: Img,
  description:
    'A widget that displays data in a line chart format, useful for visualizing trends over time.',
  category: 'Data Visualization',
  width: 200,
  height: 200,
  minWidth: 100,
  minHeight: 100,

  stylePanelConfig: {
    groups: [
      {
        name: '基本设置',
        rows: [
          {
            label: '标题',
            columns: [
              {
                key: 'title',
                component: 'PanelInput',
                defaultValue: 'Line Chart'
              }
            ]
          },
          {
            label: '折线类型',
            columns: [
              {
                key: 'lineType',
                component: 'PanelRadioGroup',
                defaultValue: 'solid',
                props: {
                  options: [
                    { label: '实线', value: 'solid' },
                    { label: '虚线', value: 'dashed' },
                    { label: '点线', value: 'dotted' }
                  ]
                }
              }
            ]
          },
          {
            label: '点标记形状',
            columns: [
              {
                key: 'pointSymbol',
                component: 'PanelSelect',
                defaultValue: 'emptyCircle',
                props: {
                  options: [
                    {
                      label: '无',
                      value: 'none'
                    },
                    {
                      label: '圆形',
                      value: 'circle'
                    },
                    {
                      label: '空心圆形',
                      value: 'emptyCircle'
                    },
                    {
                      label: '矩形',
                      value: 'rect'
                    },
                    {
                      label: '圆角矩形',
                      value: 'roundRect'
                    },
                    {
                      label: '三角形',
                      value: 'triangle'
                    },
                    {
                      label: '菱形',
                      value: 'diamond'
                    },
                    {
                      label: '钉状',
                      value: 'pin'
                    },
                    {
                      label: '箭头状',
                      value: 'arrow'
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    ]
  },

  dataPanelOptions: {}
}

export default widgetConfig
