import * as React from 'react';

import styled from "styled-components";
import { Content, CenterVertical } from '../layout'; 
import { Button, HiperLink } from '../button';
import { navigateToGame } from '../../actions/navigate';
import { showMainMenu } from '../../actions/game';
import { connect } from 'react-redux';


const Title = styled.div`
    font-size: 35px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #4a90e2;   
`


const ButtonsContainer = styled.div`
    width: 100%;
    margin-top:50px;
`;

const ScoreBlock = styled.div`
    display: block;
    font-size: 17px;
    color: #4a90e2;
    margin:35px 0 25px 0;
`
const RankBlock = styled.div`
    display: block;
    font-size: 28px;
    color: #4a90e2;
    margin:35px 0 25px 0;
`

type GameOverProps = {

}

type GameOverState = {
}
@connect(store => store)
export class GameOver extends React.Component<GameOverProps, GameOverState> {

    render(){
        const { dispatch } = this.props as any;
       
        return (
            <Content over>
                <CenterVertical>
                    <div>
                        <Title>
                            GAME OVER
                        </Title>
                        <ScoreBlock>
                            <div>SCORE</div>
                            <div>234567</div>
                        </ScoreBlock>
                       <RankBlock>
                            <div>RANK</div>
                            <div>340</div>
                       </RankBlock>                       
                        <ButtonsContainer>
                            <Button onClick={ () => dispatch(navigateToGame()) }>Volver a jugar</Button>
                            <HiperLink likeButton href="/hall-of-fame">Hall of Fame</HiperLink>
                            <Button onClick={ () => dispatch(showMainMenu()) }>Ir al Inicio</Button>
                        </ButtonsContainer>
                    </div>
                </CenterVertical>
            </Content>
        );
    }
}