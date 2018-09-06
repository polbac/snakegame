import * as React from 'react';

type GameEngineProps = {

}

type GameEngineState = {
    canvasId: string;
    imageId: string;
}

export class GameEngine extends React.Component<GameEngineProps, GameEngineState> {

    render(){
        return (
            <div>
                GAME ENGINE
                {this.props.children}
            </div>
        );
    }
}