import React, { useEffect, useState } from 'react'
import { Message, Header, Container } from 'semantic-ui-react'
import _ from 'lodash'
import moment from 'moment'

export const WifiRealtime = () => {
  const [messages, setMessages] = useState([])
  const [value, setValue] = useState('')
  const [status, setStatus] = useState('OFFLINE')
  // const socket = useRef()
  const socket = new WebSocket('ws://localhost:3500')

  useEffect(() => {
    socket.onopen = () => {
      setStatus('ONLINE')
      // const message = {
      //   event: 'connection',
      //   id: Date.now(),
      //   text: 'Init message',
      // }
      // socket.send(JSON.stringify(message))
    }

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data)
      setMessages((prev) => [message, ...prev])
    }
    socket.onclose = () => {
      console.log('Socket закрыт')
    }
    socket.onerror = () => {
      console.log('Socket произошла ошибка')
    }
  }, [])

  // const sendMessage = async () => {
  //   const message = {
  //     text: value,
  //     id: Date.now(),
  //     event: 'message',
  //   }
  //   socket.send(JSON.stringify(message))
  //   console.log(JSON.stringify(message))
  //   setValue('')
  // }

  const color = status === 'OFFLINE' ? 'yellow' : 'olive'

  if (messages.length >= 10) {
    setMessages(messages.slice(0, 9))
  }

  return (
    <Container style={{ paddingTop: '50px' }}>
      <Header>Realtime Socket's console log</Header>
      <Message>
        <Message.List>
          <Message.Item>Address: ws://localhost:3500</Message.Item>
          <Message.Item>
            Data: &#123;"text" : "Текст сообщения" , "event" : "message"&#125;
          </Message.Item>
        </Message.List>
      </Message>
      <Message
        color={color}
        header="WebSocket Server status"
        content={`Current status - ${status}`}
      />
      <Container>
        <Header as="h4">Incomming data:</Header>
        {messages.length !== 0 ? (
          messages.map((message) => (
            <p key={_.uniqueId()}>{`${moment(message.id).format('LTS')} --- ${message.text}`}</p>
          ))
        ) : (
          <Message content="no yet any messages from server..." />
        )}
      </Container>
      {/* <div className="form">
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" />
        <button onClick={sendMessage}>Отправить</button>
      </div> */}
    </Container>
  )
}
