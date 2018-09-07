import { GameEvent } from './../../types/game-event';
import { UserInputType } from '../../types/user-input';

export const heroMove = (type: UserInputType) => {
    return {
        type: GameEvent.DIRECTION_CHANGE,
        userInput: type,
    }
}

export const syncGame = () => {
    return {
        type: GameEvent.SYNC,
    }
}