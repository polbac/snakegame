import { 
    NAVIGATE_TO_GAME, 
    HERO_MOVE
} from './../actions/actionTypes';

import { View } from '../types/view';
import { Vec } from '../types/vector';

class GameState {
    snake: Snake;
    fruit: Vec;
    size: Vec;

    constructor() {
        this.snake = new Snake();
        this.fruit = new Vec(10, 15);
        this.size = new Vec(20, 30);
    }
}

class Snake {
    direction: Vec;
    head: Vec;
    body: Vec[];

    constructor() {
        this.head = new Vec(10, 10);
        this.body = [
            this.head.clone().add(new Vec(-1, 0)),
            this.head.clone().add(new Vec(-2, 0)),
            this.head.clone().add(new Vec(-2, -1)),
        ];
        this.direction = Vec.right();
    }
}

export const game = (state = new GameState(), action: any): any => {
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
