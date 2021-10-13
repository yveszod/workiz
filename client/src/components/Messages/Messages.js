import React from 'react'
import SendMessage from './SendMessage'

const Messages = ({messages}) => {
    
    return (
        <div>
            <div className="msg_window">
                { messages.map((msg, index) => {
                    return <div className={`message ${msg.body[0].direction}`} key={index}>
                        <div>{msg.body[0].body}</div>
                        <div>{msg.fromName} | {msg.body[0].recievedAt} </div>
                    </div>
                }) }
            </div>
            <SendMessage room={10} />
        </div>
    )
}

export default Messages
