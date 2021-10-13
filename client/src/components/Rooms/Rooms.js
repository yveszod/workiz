import React from 'react'

const Rooms = ({ action, list }) => {
    return (
        <div>
           {list.map((room) => {
               return <div className="chat-box" id={room.roomId} onClick={action} key={room.roomId}>
                    Room {room.roomId}
                    </div>
           })}
        </div>
    )
}

export default Rooms
