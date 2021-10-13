import React from 'react'

const Messages = ({messages}) => {
    
    return (
        <div>
            { messages.map((msg, index) => {
                return <div class="message" key={index}>
                    <div>{msg.body[0].body}</div>
                    <div>{msg.fromName} | {msg.body[0].recievedAt} </div>
                </div>
            }) }
        </div>
    )
}

export default Messages
