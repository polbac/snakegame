import * as React from 'react';
import * as PIXI from 'pixi.js';
import { connect } from 'react-redux';
import { Image8Bit } from '../Image8bit';
const uniqid = require('uniqid');
import * as style from './style.css';

type GameFrameState = {
    canvasId: string;
    pixiApp: PIXI.Application | null;
}

@connect((store: any) => store)
export class GameFrame extends React.Component<{}, GameFrameState> {
    
    private pixiApp: any;
    private player: any;
    private fruit: any;

    constructor(props: any) {
        super(props);
        this.state = {
            canvasId: `canvas-${uniqid()}`,
            pixiApp: null,
        }
        
    }

    componentDidUpdate() {
        const { snake, fruit } = (this.props as any).game ;
        this.player.x = snake.head.x;
        this.player.y = snake.head.y;

        this.fruit.x = fruit.x;
        this.fruit.y = fruit.y;
    }

    render() {
        const { authenticate } = this.props as any;
        
        return (
            <div>
                <canvas id={ this.state.canvasId }></canvas>
                <div className={style.gameStatus}>
                    <div className='profile'>
                        <Image8Bit src={authenticate.session.pictureUrl} squares={45}/>
                        {authenticate.session.firstName} {authenticate.session.lastName}
                    </div>

                    <div className='ranking'>
                        Ranking: 10
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.pixiApp = new PIXI.Application(800, 600, {
            view: document.getElementById(this.state.canvasId) as HTMLCanvasElement,
        });
        this.pixiApp.renderer.backgroundColor = 0x061639;
        
        this.player = PIXI.Sprite.fromImage('assets/images/snake_head.png');
        this.player.anchor.set(0.5);
        this.player.x = 50;
        this.player.y = this.pixiApp.renderer.height / 2;
        this.pixiApp.stage.addChild(this.player);

        this.fruit = PIXI.Sprite.fromImage('assets/images/food.png');
        this.fruit.anchor.set(0.5);
        this.fruit.x = 50;
        this.fruit.y = this.pixiApp.renderer.height / 2;
        this.pixiApp.stage.addChild(this.fruit);

        this.setState({canvasId: this.state.canvasId});
    }
}
