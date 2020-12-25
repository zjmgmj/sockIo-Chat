import LocalStroage from './LocalStroage'
import Http from './Http'
const global = (app: any) => {
  const global: any = {
    localStorage: new LocalStroage(),
    http: new Http()
  }
  app.mixin(global)
}

export default global
