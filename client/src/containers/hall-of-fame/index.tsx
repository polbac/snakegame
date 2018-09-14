import * as React from 'react';
import { connect } from 'react-redux';
import * as QRCode from 'qrcode.react';
import * as ioClient from 'socket.io-client'

import config from '../../config';
import RankingItem from '../../components/ranking-item';
import { fetchRanking } from '../../actions/hall-of-fame';
import * as style from './style.css';
import { Wrapper, Content } from '../../components/layout'; 
import { TrocaSnakeHorizontal } from '../../components/logo-snake-horizontal';


let io = ioClient(config.serverUrl);

const mapStateToProps = (state: any) => state.hallOfFame;

type HallOfFameState = {
    screen: boolean;
}

@connect(mapStateToProps)
export class HallOfFame extends React.Component<{}, HallOfFameState> {
    
    private interval: any;
    private intervalFetchRanking: any;

    readonly INTERVAL_TIME: number = 5000;
    readonly INTERVAL_FETCH_RANKING: number = 500;

    constructor(props: any) {
        super(props);
        
        this.state = {
            screen: true,
        };
    }
    componentDidMount() {
        const { dispatch } = this.props as any;
        dispatch(fetchRanking());

        this.intervalFetchRanking = setInterval(() => {
            dispatch(fetchRanking());
        }, this.INTERVAL_FETCH_RANKING);

        this.interval = setInterval(() => {
            this.setState({
                screen: !this.state.screen,
            })
        }, this.INTERVAL_TIME);

        io.on('syncLive', (res: any) => {
            console.log(res)
        });
    }

    componentWillMount() {
        clearInterval(this.interval);
        clearInterval(this.intervalFetchRanking);
    }

    render(){
        const { ranking } = this.props as any;
        const { screen } = this.state;

        return (
            <Wrapper>
                <Content hall>
                    {screen === true && (
                        <div className={style.inviteView}>
                            <div>
                                <div className={style.inviteLogoSnake}>
                                    <TrocaSnakeHorizontal />
                                </div>
                                <h1 className={style.title}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</h1>
                                <div className={style.qrCode}>
                                    <QRCode value={config.appUrl} size={300} fgColor={"#4a90e2"}/>
                                </div>
                                <div className={style.link}>http://trocasnake.trocafone.com</div>
                            </div>
                        </div>
                    )}
                
                    {screen === false && (
                        <div className={style.rankingView}>
                            <div className={style.rankingHeader}>
                                <div className={style.rankingLogoSnake}>
                                    <TrocaSnakeHorizontal />
                                </div>
                                <div className={style.rankingHeaderLabel}>
                                    <div className={style.rankingHeaderLabelTop}>TOP</div>
                                    <div className={style.rankingHeaderLabelNumber}>10</div>
                                </div>
                            </div>
            
                            <div>
                                {ranking.map( (item: any) => <RankingItem data={item} />)}
                            </div>
                        </div>
                    )}
                </Content>
            </Wrapper>
        );
    }   
}