import Img from './blank.png'
import type { WidgetConfig } from '@/types'

const widgetConfig: WidgetConfig = {
  type: 'blank',
  name: 'BlankWidget',
  img: Img,
  description: 'A blank widget that can be used as a placeholder or for custom content.',
  category: 'Basic Widgets',
  width: 100,
  height: 100,
  minWidth: 100,
  minHeight: 100
}

export default widgetConfig
