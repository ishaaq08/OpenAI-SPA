import React from 'react'

export default function index({question, setQuestion, chat, setChat}) {

    function handleChange(e){
        setQuestion(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
        setChat((prevChat) => [...prevChat, {message: question, class: "chat-text-user"}])
        answer(question)
        setQuestion("")
    }

    async function answer(question){
        const response = await fetch("http://localhost:3000/getchat", {
         method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({message: question})   
        })
        const data = await response.json()
        setChat((prevChat) => [...prevChat, {message: data.message, class: "chat-text-goku"}])
    }

    return (
    <form id="chat-form" className="chat-form" onSubmit={handleSubmit}>
        <input type="text" id="chat-message" className="form-control" placeholder='Type your message here' autoComplete='off' value={question} onChange={handleChange} />
    </form>
    )
}
