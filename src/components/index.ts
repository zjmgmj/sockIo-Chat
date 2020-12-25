import { Button, Form, Field } from 'vant'

const components = (app: any) => {
  const components: any = {
    vButton: Button,
    vForm: Form,
    vField: Field
  }
  Object.keys(components).forEach((key: string) => {
    app.component(key, components[key])
  })
}

export default components
