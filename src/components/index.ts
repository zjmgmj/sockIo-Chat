import { Button } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
const components = (app: any) => {
  const components: any = {
    'el-button': Button
  }
  Object.keys(components).forEach((key: string) => {
    app.component(key, components[key])
  })
}

export default components
