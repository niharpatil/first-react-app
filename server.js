const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const path = require('path')

io.on('connection', function(socket){
  console.log('socket has connected')
});


app.get('/', function(req,res) { 
  res.sendFile(path.join(__dirname, 'index.html'))
})

const port = process.env.PORT || 3000;
server.listen(port, function(){
  console.log('Express started. Listening on %s', port);
});