import * as React from 'react';
import * as PIXI from 'pixi.js';
const uniqid = require('uniqid');

type GameFrameProps = {

}

type GameFrameState = {
    canvasId: string;
    pixiApp: PIXI.Application | null;
}

export class GameFrame extends React.Component<GameFrameProps, GameFrameState> {
    constructor(props: any) {
        super(props);
        this.state = {
            canvasId: `canvas-${uniqid()}`,
            pixiApp: null,
        }
    }

    render() {
        return (
            <div>
                <canvas id={ this.state.canvasId }></canvas>
            </div>
        );
    }

    componentDidMount() {
        let pixiApp = new PIXI.Application(800, 600, {
            view: document.getElementById(this.state.canvasId) as HTMLCanvasElement,
        });

        console.log(pixiApp);

        pixiApp.renderer.backgroundColor = 0x061639;
        let player = PIXI.Sprite.fromImage('assets/images/snake_head.png');
        player.anchor.set(0.5);
        player.x = 50;
        player.y = pixiApp.renderer.height / 2;
        pixiApp.stage.addChild(player);

        this.setState({canvasId: this.state.canvasId, pixiApp});
    }
}
