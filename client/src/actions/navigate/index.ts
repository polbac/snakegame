import { GameEvent } from '../../types/game-event';
import { NAVIGATE_TO_GAME } from '../actionTypes'

export const navigateToGame = () => {
    return {
        type: GameEvent.START,
    };
}
