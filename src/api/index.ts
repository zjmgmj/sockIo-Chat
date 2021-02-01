// 接口管理
import Http from '../global/Http'
const basic = {
  test: () => {
    return Http({
      method: 'get', url: '/api/Config/Versions/List', data: {
        PageOffset: 1,
        CountPerPage: 10
      }
    })
  }
}
export default basic