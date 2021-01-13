import LocalStroage from './LocalStroage'
import Http from './Http'
const global = (app: any) => {
  const global: any = {
    $localStorage: new LocalStroage(),
    $http: Http
  }
  app.config.globalProperties = global
}

export default global
