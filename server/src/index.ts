import { mapUserRequest } from './utils/mapUserRequest';
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require("body-parser");

import Repository from './repository';

const repository: Repository = new Repository();

server.listen(4000);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/authenticate', async (req, res) => {
  try {
    await repository.createUser(mapUserRequest(req.body));
    const userInformation = await repository.getUserInformation(req.body.id);
    res.send({ status: true, userInformation });
  } catch (error) {
    res.send({ status: false, error});
  }
  
});

app.get('/hall-of-fame', async (req, res) => {
  try {
    const hallOfFame = await repository.getHallOfFame();
    res.send({ status: true, hallOfFame });
  } catch (error) {
    res.send({ status: false, error});
  }
  
});


io.on('connection', function (socket) {
    socket.on('sync', async function (data) {
        socket.broadcast.emit('syncLive', data);

        let { event, game, authenticate } = data;


        if (authenticate && authenticate.session) {
            let user = await repository.getUser(authenticate.session.id);

            if (user.score == null || game.score > user.score) {

            }
        }
        
    });
});

