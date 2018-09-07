import * as React from 'react';
import { connect } from 'react-redux';
import { startGame, tick, endGame } from '../../actions/game';

type GameEngineProps = {

}

type GameEngineState = {
    canvasId: string;
    imageId: string;
}

@connect(store => store)
export class GameEngine extends React.Component<GameEngineProps, GameEngineState> {

    interval: any;

    componentDidMount() {
        const { dispatch } = this.props as any;
        dispatch(
            startGame()
        );
        this.interval = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {

        const { dispatch, game } = this.props as any;

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
