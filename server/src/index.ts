const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
import Repository from './repository';

const repository: Repository = new Repository();

server.listen(4000);

app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/authenticate', function (req, res) {
  console.log(req);
  res.send('ble');
});

io.on('connection', function (socket) {
    socket.on('HeroMove', function (data) {
  });
});
