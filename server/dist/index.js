"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mapUserRequest_1 = require("./utils/mapUserRequest");
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const bodyParser = require("body-parser");
const repository_1 = require("./repository");
const repository = new repository_1.default();
server.listen(4000);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (req, res) {
    res.send('hello world');
});
app.post('/authenticate', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        yield repository.createUser(mapUserRequest_1.mapUserRequest(req.body));
        res.send({ status: true });
    }
    catch (error) {
        res.send({ status: false, error });
    }
}));
app.get('/hall-of-fame', (req, res) => __awaiter(this, void 0, void 0, function* () {
    try {
        const hallOfFame = yield repository.getHallOfFame();
        console.log(hallOfFame);
        res.send({ status: true, hallOfFame });
    }
    catch (error) {
        res.send({ status: false, error });
    }
}));
io.on('connection', function (socket) {
    socket.on('HeroMove', function (data) {
    });
});
//# sourceMappingURL=index.js.map