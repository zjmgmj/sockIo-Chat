const localStroage = window.localStroage
class LocalStroage {
  constructor() {}
  getStroage(key) {
    return JSON.parse(localStroage.getItem(key))
  }
  saveChat(msg, room){
    // room = fromId-toId
    const chat = this.getStroage('chat')
    const roomChat = chat[room]
    const nowTime = new Date().getTime()
    roomChat[nowTime] = msg
    localStroage.setItem('chat', JSON.stringify(chat))
    return this
  }
  getChat(room){
    const chat = this.getStroage('chat')
    const roomChat = chat[room]
    return roomChat
  }
}
export default LocalStroage