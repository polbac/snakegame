import * as React from 'react';
import { startGame, tick, eatFruit, endGame } from '../../actions/game';

type GameEngineProps = {

}

type GameEngineState = {
    canvasId: string;
    imageId: string;
}

export class GameEngine extends React.Component<GameEngineProps, GameEngineState> {

    interval: any;
    currentSpeed: any;

    componentDidMount() {
        const { dispatch } = this.props as any;

        dispatch(
            startGame()
        );

        this.updateInterval();
    }

    updateInterval = () => {
        const { game } = this.props as any;
        
        this.currentSpeed = game.speed;

        if (this.interval) {
            clearInterval(this.interval);
        }

        this.interval = setInterval(() => this.tick(), 150 / game.speed);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {

        const { dispatch, game } = this.props as any;

        if (this.currentSpeed !== game.speed) {
            this.updateInterval();
        }

        if (game.snake_has_eaten_fruit_recently()) { 
            dispatch(
                eatFruit()
            );
        }

        if (game.ended()) { 
            clearInterval(this.interval);
            dispatch(
                endGame()
            );
        } else {
            dispatch(
                tick()
            );
        }

    }

    render(){
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
