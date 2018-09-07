import * as React from 'react';
import { connect } from 'react-redux';
import { navigateToGame } from '../../actions/navigate';

import styled from "styled-components";
import { Content, CenterVertical } from '../layout'; 
import { TrocaSnakeVertical } from '../logo-snake-vertical';
import { Button, HiperLink } from '../button';

const mapStateToProps = (store: any) => store.authenticate;


const LogoSnake = styled.div`
    max-width:300px;
    margin: 0 auto;
    text-align:center;
`;

const ButtonsContainer = styled.div`
    width: 100%;
    margin-top:50px;
`;
@connect(mapStateToProps)
export class MainMenu extends React.Component<{}> {

    render() {
        const { dispatch } = this.props as any;
       
        return (
            <Content home>
                <CenterVertical>
                    <div>
                        <LogoSnake>
                            <TrocaSnakeVertical />
                        </LogoSnake>
                        <ButtonsContainer>
                            <Button onClick={ () => dispatch(navigateToGame()) }>Comenzar a jugar</Button>
                            <HiperLink likeButton href="/hall-of-fame">Hall of Fame</HiperLink>
                            <HiperLink likeButton href="https://google.com">About</HiperLink>
                            <HiperLink href="https://google.com">Log out</HiperLink>
                        </ButtonsContainer>
                    </div>
                </CenterVertical>
            </Content>
        )
    }   
}