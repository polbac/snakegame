"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3 = require("sqlite3");
class Repository {
    constructor() {
        this.FILE_NAME = 'db.sqlite';
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
            console.log('res', res);
            console.log('err', err);
        });
    }
}
exports.default = Repository;
//# sourceMappingURL=index.js.map