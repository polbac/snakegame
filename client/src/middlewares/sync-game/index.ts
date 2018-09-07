import { GameEvent } from '../../types/game-event';
import * as ioClient from 'socket.io-client'
import config from '../../config';

let io = ioClient(config.serverURL);


export const syncGameMiddleware = (store: any) => (next: any) => (action: any) => {
    
    if (!shouldSyncState(store, action)) {
        return next(action);    
    }

    const { game,  authenticate } = store.getState();
    io.emit('sync', {
        game,
        authenticate
    });
    

    console.log('game', game);
    console.log('authenticate', authenticate);
    return next(action);
};

const shouldSyncState = (store: any, action: any): boolean => {
    return action.type === GameEvent.START
        || action.type === GameEvent.END
        || action.type === GameEvent.FRUIT_EATEN
        || action.type === GameEvent.HERO_MOVE
}   