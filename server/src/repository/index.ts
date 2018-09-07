
import * as sqlite3 from 'sqlite3';
import { User } from '../types/user';

export default class Repository {

    private db: sqlite3.Database;
    readonly FILE_NAME: string = 'db.sqlite'

    constructor() { 
        this.db = new sqlite3.Database(this.FILE_NAME, sqlite3.OPEN_READWRITE, (err: any) => {
            if (err !== null) {
              return console.log(err);
            }
            this.assertToCreateTable();
          });
    }

    private assertToCreateTable() {
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
        `, (res: any, err: any) => {
            if (res) {
                console.log('table created ok!');
            }
        });
    }

    public createUser = (user: User) => {
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
    `, (res: any, err: any) => {
        if (res !== null) {
            console.log(`user ${user} created ok!`);
        }

        if (err !== null) {
            console.log(`can't create user ${user}`);
        }
    });
    }
    
}