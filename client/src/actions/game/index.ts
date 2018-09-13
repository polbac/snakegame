import { GameEvent } from 'commons/types/game-event';
import { Vec } from 'commons/types/vector';

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

export const endGame = () => {
    return {
        type: GameEvent.END,
    }
}

export const eatFruit = () => {
    return {
        type: GameEvent.FRUIT_EATEN,
    }
}

export const tick = () => {
    return {
        type: GameEvent.TICK,
    }
}

export const heroMove = (direction: Vec) => {
    return {
        direction,
        type: GameEvent.HERO_MOVE,
    }
}

