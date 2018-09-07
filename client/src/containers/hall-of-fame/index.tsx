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

import { Content } from '../../components/layout'; 

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
    max-width:480px;
    margin: 0 auto 45px auto;
    text-align:center;
`

const H1 = styled.h1`
    font-size:20px;
    color: #3684c6;
    margin:48px auto 80px auto;
    max-width: 1000px;

    @media (max-width: 768px) {
        font-size:15px;
        margin:15px auto 20px auto;
        max-width: 300px;
    }
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
    width:475px;
    display:inline-block;
    vertical-align:middle;
`

const RankingHeaderLabel = styled.div`
    display:inline-block;
    text-align:right;
    vertical-align:middle;
    width: calc(100% - 480px);
`

const RankingHeaderLabelTop = styled.div`
    font-size: 60px;
    font-weight: bold;
    display:inline-block;
    color: #3684c6;
    margin-right:20px;
    text-shadow: 3px 3px 0 #d1e8fc;
`

const RankingHeaderLabelNumber = styled.div`
  font-size: 60px;
  font-weight: bold;
  display:inline-block;
  color: #ffd56b;
  text-shadow: 3px 3px 0 #e8696b;
`

const RankingList = styled.ul`
 
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
                                <RankingHeaderLabel>
                                    <RankingHeaderLabelTop>TOP</RankingHeaderLabelTop>
                                    <RankingHeaderLabelNumber>10</RankingHeaderLabelNumber>
                                </RankingHeaderLabel>
                            </RankingHeader>
            
                            <RankingList>
                                {ranking.map( (item: any) => <RankingItem data={item} />)}
                            </RankingList>
                        </RankingView>
                    )}
                </Content>
            </Wrapper>
        );
    }   
}