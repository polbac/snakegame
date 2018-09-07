import * as React from 'react';
import { connect } from 'react-redux';
import * as QRCode from 'qrcode.react';
import * as ioClient from 'socket.io-client'

import config from '../../config';
import RankingItem from '../../components/ranking-item';
import { fetchRanking } from '../../actions/hall-of-fame';
import styled from "styled-components";
import { Wrapper } from '../../components/layout'; 
import { TrocaSnakeHorizontal } from '../../components/logo-snake-horizontal';
import GameEngineLive from '../../components/game-engine-live';
import { GameFrame } from '../../components/game-frame';


let io = ioClient(config.serverUrl);

const mapStateToProps = (state: any) => state.hallOfFame;

const InviteView = styled.section`
    width: 100%;
    height: 100vh;
    padding:0 60px;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
`
const InviteLogoSnake = styled.div`
    max-width:680px;
    margin: 0 auto 45px auto;
    text-align:center;
`

const H1 = styled.h1`
    font-size:20px;
    color: #fff;
    margin:48px auto 80px auto;
    max-width: 1000px;
`
const RankingView = styled.section`
    width: 100%;
    height: 100vh;
    padding:35px 85px 45px 85px;
`

const RankingHeader = styled.div`
    width: 100%;
    display:block;
    margin-bottom:30px;
`
const RankingLogoSnake = styled.div`
    width:300px;
    display:inline-block;
    vertical-align:middle;
`

const RankingHeaderLabel = styled.div`
    font-size: 30px;
    color: #4a90e2;
    display:inline-block;
    text-align:right;
    vertical-align:middle;
    width: calc(100% - 305px);
`

const RankingList = styled.ul`
    background: white;
`

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

        /* this.interval = setInterval(() => {
            this.setState({
                screen: !this.state.screen,
            })
        }, this.INTERVAL_TIME); */

        io.on('syncLive', (x: any) => console.log(x) );
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
                {screen === true && (
                    <InviteView>
                        <div>
                            <InviteLogoSnake>
                                <TrocaSnakeHorizontal />
                            </InviteLogoSnake>
                            <H1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</H1>
                            <QRCode value={config.appUrl} size={280} />
                        </div>
                    </InviteView>
                )}
               
                {screen === false && (
                    <RankingView>
                        <RankingHeader>
                            <RankingLogoSnake>
                                <TrocaSnakeHorizontal />
                            </RankingLogoSnake>
                            <RankingHeaderLabel>Top 10</RankingHeaderLabel>
                        </RankingHeader>
        
                        <RankingList>
                            {ranking.map( (item: any) => <RankingItem data={item} />)}
                        </RankingList>
                    </RankingView>
                )}

                
                
                

            </Wrapper>
        );
    }   
}