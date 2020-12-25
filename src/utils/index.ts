import LocalStroage from './LocalStroage'
const Utils = (app: any) => {
  app.mixin(new LocalStroage())
}
export default Utils
