import { GameEvent } from '../types/game-event';
import { View } from '../types/view';
import { Vec } from '../types/vector';
import * as _ from 'lodash';

class GameState {
    snake: Snake;
    fruit: Vec;
    size: Vec;
    view: View;
    score: number;

    constructor() {
        this.snake = new Snake();
        this.fruit = new Vec(10, 15);
        this.size = new Vec(20, 30);
        this.score = 0;
        this.view = View.MAIN_MENU;
    }

    clone() : GameState {
        let c = new GameState();
        c.snake = this.snake.clone();
        c.fruit = this.fruit.clone();
        c.size = this.size.clone();
        c.score = this.score;
        c.view = this.view;
        return c
    }

    ended() : boolean {
        return this.snake.has_eaten_up_itself()
    }

    snake_has_eaten_fruit() : boolean {
        return this.snake.head == this.fruit;
    }

    tick() : GameState {
        if (this.snake.has_eaten_up_itself()) {
            return this
        }

        this.snake.move(this.size);

        if (this.snake_has_eaten_fruit()) {
            this.snake.grow();
            this.score += 1;
        }

        return this
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

    clone() : Snake {
        let s = new Snake();
        s.direction = this.direction.clone();
        s.head = this.head.clone();
        s.body = _.map(this.body, (b) => b.clone() );
        return s
    }

    move(mapSize: Vec) {
        let body = _.dropRight(this.body, 1)
        this.body = [this.head, ...body];

        let head = this.head.clone().add(this.direction);
        head.x = head.x % mapSize.x;
        head.y = head.y % mapSize.y;
        this.head = head;
    }

    grow() {
        let new_segment = _.last(this.body);
        if (new_segment) {
            this.body = [...this.body, new_segment.clone()];
        }
    }

    has_eaten_up_itself() : boolean {
        return _.some(this.body, (b) => b.equals(this.head) );
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

        case GameEvent.TICK : {
            return state.clone().tick();
        }

        default : {
            return state
        }
    }
}
