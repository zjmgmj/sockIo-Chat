class LocalStroage {
  constructor() {}
  get(key: String) {
    return JSON.parse(localStroage.getItem(key))
  }
  saveChat(msg: String, room: String){
    // room = fromId-toId
    const roomChat = this.getChat(room)
    const nowTime = new Date().getTime()
    roomChat[nowTime] = msg
    localStroage.setItem('chat', JSON.stringify(chat))
    return this
  }
  getChat(room: String){
    const chat = this.get('chat')
    const roomChat = chat[room]
    return roomChat
  }
}
export default LocalStroage