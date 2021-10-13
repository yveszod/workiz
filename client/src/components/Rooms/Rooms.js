import React from 'react'

const Rooms = ({ action, list }) => {
    return (
        <div>
           {list.map((room, index) => {
               return <div className="chat-box" id={room.roomId} onClick={action} key={index}>
                    Room {room.roomId}
                    </div>
           })}
        </div>
    )
}

export default Rooms
