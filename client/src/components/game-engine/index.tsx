import * as React from 'react';
import { connect } from 'react-redux';
import { startGame, tick } from '../../actions/game';

type GameEngineProps = {

}

type GameEngineState = {
    canvasId: string;
    imageId: string;
}

@connect(store => store.game)
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

    tick() {
        const { dispatch } = this.props as any;
        dispatch(
            tick()
        );
    }

    render(){
        return (
            <div>
                GAME ENGINE
                {this.props.children}
            </div>
        );
    }
}
