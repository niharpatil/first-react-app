const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log('socket has connected')
});

const port = process.env.PORT || 3000;
server.listen(port, function(){
  console.log('Express started. Listening on %s', port);
});