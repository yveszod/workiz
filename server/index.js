const express = require('express')
const app = express()
const fs = require('fs')


let allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
  }
app.use(allowCrossDomain)

app.use(
    express.urlencoded({
      extended: true
    })
)

app.use(express.json())


let rawdata = fs.readFileSync('messages.json'); 

const randomMessages = JSON.parse(rawdata);

app.post('/api/ping_message', (req, res) => {
  randomMessages.push(req.body);
  fs.writeFile('messages.json', JSON.stringify(randomMessages), 'utf8', ()=> {
      console.log('Added')
  });
  res.end();

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