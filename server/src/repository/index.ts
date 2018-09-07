
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

    public createUser = (user: User): Promise<any> => {
        
        return new Promise((resolve, reject) => {
            
            const { id, name, avatar, username, headline } = user;

            this.db.run(`
                INSERT OR REPLACE INTO 
                    users (id, name, avatar, username, headline) 
                VALUES ('${id}', '${name}', '${avatar}', '${username}', '${headline}')
            `, (res: any, err: any) => {
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
    }

    public getHallOfFame = (): Promise<any> => {
        return new Promise((resolve, reject) => {
    

            this.db.all(`SELECT * FROM users;`, (err: any, rows: any) => {
                
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
    }
    
    public getUser = (userId: string): Promise<any> => {
        return new Promise((resolve, reject) => {
            this.db.get(`
                SELECT 
                    id, name, avatar, username, headline, score
                FROM users where id = '${userId}';
            `, (err: any, row: any) => {
                if (row !== undefined) {
                    console.log(row);
                    resolve({
                        // id: row;
                        // name: string;
                        // score: number;
                        // avatar: string;
                        // headline: string;
                        // username: string;
                    });
                }

                if (err !== undefined) {
                    console.log(`can't get user ${err}`);
                    reject();
                }
            });
        });
    }
}
