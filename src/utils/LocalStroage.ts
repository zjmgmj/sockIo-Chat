const localStorage = window.localStorage;
class LocalStorage {
  constructor() {}
  getStroage(key: string) {
    // if(!key) return false
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : "";
  }
  saveChat(msg: string, room: any) {
    // room = fromId-toId
    const chat = this.getStroage("chat");
    const roomChat = chat[room];
    const nowTime = new Date().getTime();
    roomChat[nowTime] = msg;
    localStorage.setItem("chat", JSON.stringify(chat));
    return this;
  }
  getChat(room: any) {
    const chat = this.getStroage("chat");
    const roomChat = chat[room];
    return roomChat;
  }
}
export default LocalStorage;
