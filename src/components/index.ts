import { ElButton } from 'element-plus'
const components = (app: any) => {
  const components: any = [ElButton]
  components.forEach((component: any) => {
    app.component(component.name, component)
  })
}

export default components
