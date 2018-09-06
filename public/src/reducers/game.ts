import { 
    NAVIGATE_TO_GAME, 
    HERO_MOVE
} from './../actions/actionTypes';

import { View } from '../types/view';

const INIT_STATE_GAME: any = {
    userInput: null,
    view: View.MAIN_MENU,
};

export const game = (state = INIT_STATE_GAME, action: any): any => {
    switch (action.type) {

        case NAVIGATE_TO_GAME : {
            return {
                userInput: null,
                view: View.GAME,
            }
        }

        case View.GAME_OVER : {
            return {
                userInput: null,
                view: View.GAME_OVER,
            }
        }

        case HERO_MOVE : {
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
