"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
let a = 1;
class App {
    constructor() {
        this.express = express();
        this.mountRoutes();
    }
    mountRoutes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            console.log(a);
            a += 1;
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map