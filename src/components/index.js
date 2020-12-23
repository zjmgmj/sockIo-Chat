import { Button } from 'vant'

const components = (app) => {
  const components = {
    'van-button': Button
  }
  Object.keys(components).forEach(key => {
    app.component(key, components[key])
  })
}

export default components