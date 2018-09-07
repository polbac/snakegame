import * as React from 'react';
import { connect } from 'react-redux';
import * as QRCode from 'qrcode.react';
import config from '../../config';
import RankingItem from '../../components/ranking-item';
import { fetchRanking } from '../../actions/hall-of-fame';
import styled from "styled-components";
import { Wrapper } from '../../components/layout'; 
import { TrocaSnake } from '../../components/logo-snake';

const mapStateToProps = (state: any) => state.hallOfFame;


const LogoSnake = styled.div`
    max-width:680px;
    margin: 0 auto 45px auto;
    text-align:center;
`

const InviteView = styled.section`
    width: 100%;
    height: 100vh;
    padding:0 60px;
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
`

const H1 = styled.h1`
    font-size:20px;
    color: #fff;
    margin:48px auto 80px auto;
    max-width: 1000px;
`
const RankingView = styled.section`

`


@connect(mapStateToProps)
export class HallOfFame extends React.Component<{}> {
    componentDidMount() {
        const { dispatch } = this.props as any;
        dispatch(fetchRanking());

    }
    render(){
        const { ranking } = this.props as any;
        const showInvite = true;
        const showRanking = false;

        return (
            <Wrapper>
                {showInvite && (
                    <InviteView>
                        <div>
                            <LogoSnake>
                                <TrocaSnake />
                            </LogoSnake>
                            <H1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</H1>
                            <QRCode value={config.appUrl} size={280} />
                        </div>
                    </InviteView>
                )}
               
                {showRanking && (
                    <RankingView>
                        <LogoSnake>
                            <TrocaSnake />
                        </LogoSnake>
                        {ranking.map( (item: any) => <RankingItem data={item} />)}
                    </RankingView>
                )}
            </Wrapper>
        );
    }   
}