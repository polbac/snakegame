import { GameEvent } from '../../types/game-event';
import * as ioClient from 'socket.io-client'
import config from '../../config';

let io = ioClient(config.serverURL);


export const syncGameMiddleware = (store: any) => (next: any) => (action: any) => {
    
    if (!shouldSyncState(store, action)) {
        return next(action);    
    }

    const { game } = store.getState();
    io.emit('sync', game);
    
    return next(action);
};

const shouldSyncState = (store: any, action: any): boolean => {
    return action.type === GameEvent.SYNC 
}   