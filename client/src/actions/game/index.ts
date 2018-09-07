import { GameEvent } from './../../types/game-event';
import { UserInputType } from '../../types/user-input';

export const showMainMenu = () => {
    return {
        type: GameEvent.SHOW_MAIN_MENU,
    }
}


export const startGame = () => {
    return {
        type: GameEvent.START,
    }
}

export const startEnd = () => {
    return {
        type: GameEvent.END,
    }
}

export const eatFruit = () => {
    return {
        type: GameEvent.FRUIT_EATEN,
    }
}

export const heroMove = (type: UserInputType) => {
    return {
        type: GameEvent.HERO_MOVE,
        userInput: type,
    }
}