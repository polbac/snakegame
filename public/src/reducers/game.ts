
import { View } from '../types/view';

const INIT_STATE_GAME: any = {
    userInput: null,
    view: View.MAIN_MENU,
};

export const game = (state = INIT_STATE_GAME, action: any): any => {
    switch (action.type) {
      default:
        return state
    }
}
