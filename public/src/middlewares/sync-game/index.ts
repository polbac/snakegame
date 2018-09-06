import { HERO_MOVE } from './../../actions/actionTypes';
import * as ioClient from 'socket.io-client'
import config from '../../config';

let io = ioClient(config.serverURL);


export const syncGameMiddleware = (store: any) => (next: any) => (action: any) => {
    if (action.type === HERO_MOVE) {
        io.emit("HeroMove", { move: action.userInput });
    }
    return next(action);
};