const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(4000);

app.get('/', function (req, res) {
  res.send('hello world');
});

io.on('connection', function (socket) {
  socket.on('HeroMove', function (data) {
    console.log(data);
  });
});