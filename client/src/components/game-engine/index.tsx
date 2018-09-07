import * as React from 'react';
import { connect } from 'react-redux';
import { startGame } from '../../actions/game';

type GameEngineProps = {

}

type GameEngineState = {
    canvasId: string;
    imageId: string;
}

@connect(store => store.game)
export class GameEngine extends React.Component<GameEngineProps, GameEngineState> {

    componentDidMount() {
        const { dispatch } = this.props as any;
        dispatch(
            startGame()
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