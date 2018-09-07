"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require("sqlite3");
class Repository {
    constructor() {
        this.FILE_NAME = 'db.sqlite';
        this.createUser = (user) => {
            const { id, name, avatar, username, headline } = user;
            return new Promise((resolve, reject) => {
                this.db.run(`
                INSERT INTO 
                    users (id, name, avatar, username, headline) 
                VALUES
                        (${id}, '${name}', '${avatar}', '${username}', '${headline}')
                WHERE NOT EXISTS 
                        (SELECT id FROM users WHERE id=${id});
            `, (res, err) => {
                    if (res !== undefined) {
                        console.log(res);
                        console.log(`user ${user} created ok!`);
                        resolve();
                    }
                    if (err !== undefined) {
                        console.log(`can't create user ${err}`);
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