"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require("sqlite3");
class Repository {
    constructor() {
        this.FILE_NAME = 'db.sqlite';
        this.createUser = (user) => {
            return new Promise((resolve, reject) => {
                const { id, name, avatar, username, headline } = user;
                this.db.run(`
                INSERT OR REPLACE INTO 
                    users (id, name, avatar, username, headline) 
                VALUES ('${id}', '${name}', '${avatar}', '${username}', '${headline}')
            `, (res, err) => {
                    if (res !== undefined) {
                        console.log(res);
                        console.log(`user ${user} updated/created ok!`);
                        resolve();
                    }
                    if (err !== undefined) {
                        console.log(`can't create user ${err}`);
                        reject();
                    }
                });
            });
        };
        this.getHallOfFame = () => {
            return new Promise((resolve, reject) => {
                this.db.all(`SELECT * FROM users;`, (err, rows) => {
                    console.log('rows', rows);
                    console.log('err', err);
                    if (rows !== undefined) {
                        resolve(rows);
                    }
                    if (err !== undefined) {
                        console.log(`can't list ranking`);
                        reject();
                    }
                });
            });
        };
        this.getUser = (userId) => {
            return new Promise((resolve, reject) => {
                this.db.get(`
                SELECT 
                    id, name, avatar, username, headline, score
                FROM users where id = '${userId}';
            `, (err, row) => {
                    if (row !== undefined) {
                        console.log(row);
                        resolve({});
                    }
                    if (err !== undefined) {
                        console.log(`can't get user ${err}`);
                        reject();
                    }
                });
            });
        };
        this.db = new sqlite3.Database(this.FILE_NAME, sqlite3.OPEN_READWRITE, (err) => {
            if (err !== null) {
                return console.log(err);
            }
            this.assertToCreateTable();
        });
    }
    assertToCreateTable() {
        this.db.run(`
            CREATE TABLE 
                IF NOT EXISTS 
                    users (
                        id TEXT PRIMARY KEY, 
                        name TEXT,
                        score INTEGER,
                        avatar TEXT,
                        headline TEXT,
                        username TEXT
                    )
        `, (res, err) => {
            if (res) {
                console.log('table created ok!');
            }
        });
    }
}
exports.default = Repository;
//# sourceMappingURL=index.js.map