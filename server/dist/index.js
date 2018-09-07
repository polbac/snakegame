"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const repository_1 = require("./repository");
const repository = new repository_1.default();
console.log(repository);
server.listen(4000);
app.get('/', function (req, res) {
    res.send('hello world');
});
io.on('connection', function (socket) {
    socket.on('HeroMove', function (data) {
        /* var db = new sqlite3.Database('./db.sqlite', sqlite3.OPEN_CREATE, (err: any) => {
          if (err !== null) {
            console.log("database file does not exists");
          }
        });
    
        console.log('creando tabla');
        db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)', (res: any, err: any) => {
            console.log(res);
            console.log(err);
            console.log('insertando valores');
            db.run("INSERT INTO users (name) VALUES ('" + data.move + "');", (res: any, err: any) => {
                console.log(res);
                console.log(err);
            });
        }); */
    });
});
//# sourceMappingURL=index.js.map