import { GameEvent } from 'commons/types/game-event';
import { View } from 'commons/types/view';
import { Vec } from 'commons/types/vector';
import * as _ from 'lodash';

export class GameState {
    snake: Snake;
    fruit: Vec;
    size: Vec;
    view: View;
    score: number;
    speed: number;
    fruit_eaten_recently: boolean;

    constructor() {
        this.snake = new Snake();
        this.fruit = new Vec(10, 15);
        this.size = new Vec(28, 33);
        this.score = 0;
        this.view = View.MAIN_MENU;
        this.speed = 1;
        this.fruit_eaten_recently = false;
    }

    clone() : GameState {
        let c = new GameState();
        c.snake = this.snake.clone();
        c.fruit = this.fruit.clone();
        c.size = this.size.clone();
        c.score = this.score;
        c.view = this.view;
        c.fruit_eaten_recently = this.fruit_eaten_recently;
        return c
    }

    public ended() : boolean {
        return this.snake.has_eaten_up_itself()
    }

    all_board_coordinates() {
        return _.flatMap(_.range(this.size.x), (x) => _.map(_.range(this.size.y), (y) => new Vec(x, y) ) )
    }

    randomize_fruit() {
        let rand = Math.random();
        let possible_coordinates = _.filter(this.all_board_coordinates(), (pos) => !this.snake.conains(pos) );
        this.fruit = possible_coordinates[Math.floor(rand * possible_coordinates.length)];
    }

    snake_is_eating_fruit() : boolean {
        return this.snake.head.equals(this.fruit);
    }

    snake_has_eaten_fruit_recently() : boolean {
        return this.fruit_eaten_recently
    }

    tick = () : GameState => {
        if (this.snake.has_eaten_up_itself()) {
            return this
        }

        this.snake.move(this.size);

        if (this.snake_is_eating_fruit()) {
            console.log("FRUIIIIIIIIIIIIIIIIIIT");
            this.snake.grow();
            this.score += 1;
            this.speed *= 1.05;
            this.randomize_fruit();
            this.fruit_eaten_recently = true;
        } else {
            this.fruit_eaten_recently = false;
        }

        return this
    }

}

export class Snake {
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
        head.x = (head.x + mapSize.x) % mapSize.x;
        head.y = (head.y + mapSize.y) % mapSize.y;
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

    conains(pos: Vec) : boolean {
        return _.some(this.body, (b) => b.equals(pos) ) || this.head.equals(pos);
    }
}

export const game = (state = new GameState(), action: any): any => {
    switch (action.type) {

        case GameEvent.SHOW_MAIN_MENU : {
            let s = state.clone();
            s.view = View.MAIN_MENU;
            return s
        }

        case GameEvent.START : {
            let s = state.clone();
            s.view = View.GAME;
            // startAt: new Date(),
            return s
        }

        case GameEvent.END : {
            let s = state.clone();
            s.view = View.GAME_OVER;
            // endAt: new Date(),
            return s
        }

        case GameEvent.HERO_MOVE : {
            let forward = state.snake.direction.clone();
            let back = forward.mul(new Vec(-1, -1));
            if (action.direction.equals(forward) || action.direction.equals(back)) {
                return state
            }
            let s = state.clone();
            s.snake.direction = action.direction;
            return s
        }

        case GameEvent.TICK : {
            return state.clone().tick();
        }

        default : {
            return state
        }
    }
}
