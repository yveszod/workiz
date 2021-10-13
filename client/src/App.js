import { useEffect, useState } from 'react';
import Rooms from './components/Rooms/Rooms';
import Messages from './components/Messages/Messages';
import './App.css';


function App() {

  const remoteUrl = 'http://localhost:3001/api/get_chat/';
  const [roomsList, setRoomsList] = useState([]);
  const [filteredMessages, setfilteredMessages] = useState([]);

  // Inir population
  useEffect(() => {
    fetch(remoteUrl).then(res => {
      return res.json()
    }).then(jsonResponse => {
      setRoomsList(jsonResponse)
    })
  }, [])


  // Polling Mechanism
  useEffect(() => {
    const getData = () => {
      fetch(remoteUrl).then(res => {
        return res.json()
      }).then(jsonResponse => {
        setRoomsList(jsonResponse)
      })
    }
    setInterval(getData, 10000)
  }, [])

  const displayRoomMessages = (event) => {
    const id = event.target.id;
    setfilteredMessages(
      roomsList.filter(room => room.roomId == id)
    )
  }

  return (
    <div className="App">
      <div className="chat-wrapper">
        <div className="chat-body">
          <Rooms action={displayRoomMessages} list={roomsList} />
          <Messages messages={filteredMessages} />
        </div>
      </div>
    </div>
  );
}

export default App;
