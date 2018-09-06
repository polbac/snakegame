import { NAVIGATE_TO_GAME, NAVIGATE_TO_MAIN_MENU } from './../actions/actionTypes';

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

        case NAVIGATE_TO_MAIN_MENU : {
            return {
                userInput: null,
                view: View.MAIN_MENU,
            }
        }

        case View.GAME_OVER : {
            return {
                userInput: null,
                view: View.GAME_OVER,
            }
        }
    
        default : {
            return state
        }
    }
}
