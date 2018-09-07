import { GameEvent } from '../types/game-event';
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

        case GameEvent.SHOW_MAIN_MENU : {
            return {
                ...state,
                view: View.MAIN_MENU,
            }
        }

        case GameEvent.START : {
            return {
                ...state,
                view: View.GAME,
                startAt: new Date(),
            }
        }

        case GameEvent.END : {
            return {
                ...state,
                view: GameEvent.END,
                endAt: new Date(),
            }
        }

        case GameEvent.HERO_MOVE : {
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
