import { Button } from 'vant'

const components = (app: any) => {
  const components: any = {
    'van-button': Button
  }
  Object.keys(components).forEach((key: string) => {
    app.component(key, components[key])
  })
}

export default components
