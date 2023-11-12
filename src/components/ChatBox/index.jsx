import React from 'react'
import "./styles.css"

export default function index({chat}) {

    return (
    <div className='chat-box'>
        {
            chat.map((item, index) => (
                <div key={index} className={item.class}>
                    {item.class === "chat-text-goku" ? <strong>Goku: </strong> : <strong>You: </strong>} {item.message}
                </div>
            ))
        }
    </div>
    )
}
