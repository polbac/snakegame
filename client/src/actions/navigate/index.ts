import { GameEvent } from '../../types/game-event';

export const navigateToGame = () => {
    return {
        type: GameEvent.START,
    };
}
