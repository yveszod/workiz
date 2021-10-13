const express = require('express')
const app = express()

let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
app.use(allowCrossDomain);

const randomMessages = [
    {
        roomId: 10,
        fromName: "Sender",
        fromNumber: "0546676616",
        body: [
            {
                recievedAt: new Date().toGMTString(),
                body: "lorem ipsum 111",
                direction: "incoming"
            },{
                recievedAt: new Date().toGMTString(),
                body: "lorem ipsum 222",
                direction: "outgoing"
            }
        ]
    },
    {
        roomId: 11,
        fromName: "Sender",
        fromNumber: "0546676616",
        body: [
            {
                recievedAt: new Date().toGMTString(),
                body: "lorem ipsum",
                direction: "incoming"
            },{
                recievedAt: new Date().toGMTString(),
                body: "lorem ipsum",
                direction: "outgoing"
            }
        ]
    }
]

app.post('/api/ping_message', (req, res) => {
  res.send('hello world');
})


app.get('/api/get_chat', (req, res) => {
    res.json(randomMessages);
})

app.get('/api/get_chat/:room_id', (req, res) => {
    const roomMessages = randomMessages.filter( (room) => {
        return room.roomId == req.params.room_id
    } )
    res.json(roomMessages);
})

var port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});