import LocalStroage from './LocalStroage'
const Utils = (app) => {
  app.mixin(new LocalStroage())
}
export default Utils