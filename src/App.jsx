import React, {useState} from 'react'
import { PromptForm, ChatBox } from './components'
import "./app.css"

export default function App() {
  const [question, setQuestion] = useState("")
  const [chat, setChat] = useState([{message: "Hello there. I am Goku. Ask me anything!", class: "chat-text-goku"}])

  return (
    <div className='body'>
      <div className="container py-5">
        <div className="row">
          <div className="col-4">
            <div className="picture">
              <img src="/assets/goku.png" alt="Goku" className="img-fluid" />
            </div>
          </div>
          <div className="col-8">
            <ChatBox 
              chat={chat}
              setChat={setChat}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-4"></div>
          <div className="col-8">
            <PromptForm 
              question={question}
              setQuestion={setQuestion}
              chat={chat}
              setChat={setChat}
              />
          </div>
        </div>
      </div>
    </div>
  )
}
