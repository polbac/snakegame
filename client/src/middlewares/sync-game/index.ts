import { GameEvent } from '../../types/game-event';
import { SocketEvent } from '../../types/socket-event';
import * as ioClient from 'socket.io-client'
import config from '../../config';

let io = ioClient(config.serverUrl);


export const syncGameMiddleware = (store: any) => (next: any) => (action: any) => {

    let socketEvent = intoSocketEvent(action.type);
    
    if (!socketEvent) {
        return next(action);    
    }

    const { game,  authenticate } = store.getState();
    io.emit('sync', {
        event: socketEvent,
        game,
        authenticate
    });
    
    console.log('game', game);
    console.log('authenticate', authenticate);
    return next(action);
};

const intoSocketEvent = (event: GameEvent) : SocketEvent|null => {
    switch (event) {
        case GameEvent.START: return SocketEvent.START;
        case GameEvent.END: return SocketEvent.END;
        case GameEvent.FRUIT_EATEN: return SocketEvent.FRUIT_EATEN;
        case GameEvent.HERO_MOVE: return SocketEvent.DIRECTION_CHANGE;
        default: return null;
    }
}

