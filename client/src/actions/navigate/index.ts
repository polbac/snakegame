import { GameEvent } from 'commons/types/game-event';

export const navigateToGame = () => {
    return {
        type: GameEvent.START,
    };
}
