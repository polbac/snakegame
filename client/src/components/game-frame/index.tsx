import * as React from 'react';
import * as PIXI from 'pixi.js';
import { connect } from 'react-redux';
import { Image8Bit } from '../Image8bit';
const uniqid = require('uniqid');
import * as style from './style.css';
import { Vec } from '../../types/vector';

type GameFrameState = {
    canvasId: string;
    pixiApp: PIXI.Application | null;
}

@connect((store: any) => store)
export class GameFrame extends React.Component<{}, GameFrameState> {
    
    private pixiApp: any;
    private player: any;
    private fruit: any;

    readonly SCENE_MAP = {
        x: 28,
        y: 33,
    }

    constructor(props: any) {
        super(props);
        this.state = {
            canvasId: `canvas-${uniqid()}`,
            pixiApp: null,
        }
        
    }

    componentDidUpdate() {
        const { snake, fruit } = (this.props as any).game ;

        this.player.x = this.mapRealSize(snake.head).x;
        this.player.y = this.mapRealSize(snake.head).y;

        this.fruit.x = this.mapRealSize(fruit).x;
        this.fruit.y = this.mapRealSize(fruit).y;
    }

    render() {
        const { authenticate } = this.props as any;
        
        return (
            <div>
                <canvas style={{ height: '100%', width: '100%', position: 'fixed' }} id={ this.state.canvasId }></canvas>
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

    mapRealSize = (pos: Vec): Vec => {
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

        return new Vec(pos.x * canvasWidth / this.SCENE_MAP.x, pos.y * canvasHeight / this.SCENE_MAP.y);
    }

    componentDidMount() {
        this.pixiApp = new PIXI.Application(window.innerWidth, window.innerHeight, {
            view: document.getElementById(this.state.canvasId) as HTMLCanvasElement,
        });
        this.pixiApp.renderer.backgroundColor = 0x061639;
        
        this.player = PIXI.Sprite.fromImage('assets/images/snake_head.png');
        // this.player.anchor.set(0.5);
        this.player.x = 50;
        this.player.y = this.pixiApp.renderer.height / 2;
        this.pixiApp.stage.addChild(this.player);

        this.fruit = PIXI.Sprite.fromImage('assets/images/food.png');
        // this.fruit.anchor.set(0.5);
        this.fruit.x = 50;
        this.fruit.y = this.pixiApp.renderer.height / 2;
        this.pixiApp.stage.addChild(this.fruit);

        this.setState({canvasId: this.state.canvasId});
    }
}
