
interface TopicHandler {
  (payload: any): void
}

class SocketClient {
  websocket: WebSocket
  handlers: Map<String, TopicHandler>

  constructor(websocket: WebSocket, handlers: Map<String, TopicHandler>) {
    if (!(websocket && handlers)) throw new Error('Wrong arguments.')
    this.websocket = websocket
    this.handlers = handlers
    this.websocket.onmessage = this.onMessage
  }

  readonly onMessage = ({ data }: MessageEvent): any => {
    const [topic, payload] = JSON.parse(data)
    const handler = this.handlers.get(topic)
    if (handler) handler(payload)
  }

  send(topic: String, payload: any) {
    this.websocket.send(JSON.stringify([topic, payload]))
  }

  listen(topic: String, callback: TopicHandler) {
    this.handlers.set(topic, callback)
  }
}

export default SocketClient
