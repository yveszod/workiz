import React, { useState } from 'react'

const SendMessage = ({room}) => {

    const [messageInput, setmessageInput] = useState('');
    const [messageName, setmessageName] = useState('');

    const clickHandler = () => {
        const messageData = {
            roomId: 10,
            fromName: messageName,
            fromNumber: "0546676616",
            body: [
                {
                    recievedAt: new Date().toGMTString(),
                    body: messageInput,
                    direction: "outgoing"
                }
            ]
        }
        fetch('http://localhost:3001/api/ping_message', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(messageData)
        })
        console.log(messageData);
    }

    return (
        <div className="input_wrapper">
            <input type="text" onChange={(event) => setmessageName(event.target.value)} placeholder="Name" />
            <input type="text" onChange={(event) => setmessageInput(event.target.value)} placeholder="Message" />
            <button onClick={clickHandler}>Send</button>
        </div>
    )
}

export default SendMessage
