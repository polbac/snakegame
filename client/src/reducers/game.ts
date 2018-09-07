import { GameEvent } from '../types/game-event';
import { View } from '../types/view';

const INIT_STATE_GAME: any = {
    userInput: null,
    view: View.MAIN_MENU,
};

export const game = (state = INIT_STATE_GAME, action: any): any => {
    switch (action.type) {

        case GameEvent.START : {
            return {
                userInput: null,
                view: View.GAME,
                startAt: new Date(),
            }
        }

        case GameEvent.END : {
            return {
                userInput: null,
                view: GameEvent.END,
                endAt: new Date(),
            }
        }

        case GameEvent.DIRECTION_CHANGE : {
            return {
                ...state,
                userInput: action.userInput
            }
        }

        default : {
            return state
        }
    }
}
