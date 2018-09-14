import * as React from 'react';
import * as PIXI from 'pixi.js';
import { connect } from 'react-redux';
import { Image8Bit } from '../Image8bit';
const uniqid = require('uniqid');
import * as style from './style.css';
import { Vec } from 'commons/types/vector';

type GameFrameState = {
    canvasId: string;
    pixiApp: PIXI.Application | null;
}

type GameFrameProps = {
    target?: string;
    authenticate?: any;
    live?: any;
}

@connect((store: any) => store)
export class GameFrame extends React.Component<GameFrameProps, GameFrameState> {
    
    private pixiApp: any;
    private player: any;
    private fruit: any;
    private bodyParts: any[] = [];

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
        
        const { snake, fruit } = (this.props as any)[this.props.target as any];

        if (snake !== undefined) {
            this.player.x = this.mapRealPosition(snake.head).x;
            this.player.y = this.mapRealPosition(snake.head).y;

            this.fruit.x = this.mapRealPosition(fruit).x;
            this.fruit.y = this.mapRealPosition(fruit).y;

            snake.body.forEach((part: any, index: any) => {
                if (this.bodyParts[index] == undefined) {
                    const bodyPart = PIXI.Sprite.fromImage('assets/images/body.png');
                    bodyPart.width = this.mapRealSize(bodyPart).width;
                    bodyPart.height = this.mapRealSize(bodyPart).height;
                    bodyPart.x = this.mapRealPosition(part).x;
                    bodyPart.y = this.mapRealPosition(part).y;
                    this.pixiApp.stage.addChild(bodyPart);
                    this.bodyParts.push(bodyPart);
                    return;
                }

                this.bodyParts[index].x = this.mapRealPosition(part).x;
                this.bodyParts[index].y = this.mapRealPosition(part).y;
            });
        }
    }

    render() {
        let user: any = {};

        let { snake } = (this.props as any)[this.props.target as any];

        if (this.props.target === 'game') {
            user = this.props.authenticate.session;
        }

        if (this.props.target === 'live') {

            if (this.props.live.hasOwnProperty('live') === false){
                return <p></p>
            }
            if ( this.props.live.live.authenticate.session === null) {
                return <p></p>
            }
            user = this.props.live.live.authenticate.session;
            snake = this.props.live.live.game.snake;
        }


        return (
            <div>
                <div>
                    <span className={style.scoreText}>SCORE</span>
                    <div className={style.score}>
                        <span className={style.scoreImage}></span>
                        <span className={style.scoreValue}>{snake.body.length}</span>
                    </div>
                </div>
               
                <canvas style={{ height: window.innerWidth * this.SCENE_MAP.y / this.SCENE_MAP.x , width: 'calc(100% - 40px)', position: 'fixed' }} id={ this.state.canvasId }></canvas>

                <div className={style.gameStatus}>
                    <div className={style.profile}>
                        <Image8Bit src={user.avatar} squares={58}/>
                    </div>
                    <div className={style.userInfo}>
                        <div className={style.userName}>
                            <b>{user.username}</b>
                            <p>{user.headline}</p>
                        </div>
    
                        <div className={style.ranking}>
                            <span  className={style.rankingTitle}>
                                Rank
                            </span>
                            <span className={style.rankingPosition}>
                                {user.ranking}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    mapRealPosition = (pos: Vec): Vec => {
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

        return new Vec(pos.x * canvasWidth / this.SCENE_MAP.x, pos.y * canvasHeight / this.SCENE_MAP.y);
    }

    mapRealSize = (element: any): any => {
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

        return {
            width: canvasWidth / this.SCENE_MAP.x,
            height: canvasHeight / this.SCENE_MAP.y,
        };
        
    }

    componentDidMount() {
        this.pixiApp = new PIXI.Application(window.innerWidth, window.innerHeight, {
            view: document.getElementById(this.state.canvasId) as HTMLCanvasElement,
        });
        this.pixiApp.renderer.backgroundColor = 0xffffff;
        
        this.player = PIXI.Sprite.fromImage('assets/images/head.png');
        this.player.width = this.mapRealSize(this.player).width;
        this.player.height = this.mapRealSize(this.player).height;
        this.player.x = 50;
        this.player.y = this.pixiApp.renderer.height / 2;
        this.pixiApp.stage.addChild(this.player);

        this.fruit = PIXI.Sprite.fromImage('assets/images/fruit.png');
        this.fruit.x = 50;
        this.fruit.width = this.mapRealSize(this.fruit).width;
        this.fruit.height = this.mapRealSize(this.fruit).height;
        this.fruit.y = this.pixiApp.renderer.height / 2;
        this.pixiApp.stage.addChild(this.fruit);

        this.setState({canvasId: this.state.canvasId});
    }
}
