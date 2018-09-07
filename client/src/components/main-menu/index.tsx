import * as React from 'react';
import { connect } from 'react-redux';
import { navigateToGame } from '../../actions/navigate';

import styled from "styled-components";
import { Content } from '../layout'; 
import LogoSnake from '../logo-snake';
import { Button, HiperLink } from '../button';

const mapStateToProps = (store: any) => store.authenticate;

const ButtonsContainer = styled.div`
    width: 100%;
    margin-top:100px;
`;
@connect(mapStateToProps)
export class MainMenu extends React.Component<{}> {

    render() {
        const { dispatch } = this.props as any;
       
        return (
            <Content home>
                <LogoSnake></LogoSnake> 
                <ButtonsContainer>
                    <Button onClick={ () => dispatch(navigateToGame()) }>Comenzar a jugar</Button>
                    <HiperLink likeButton href="/hall-of-fame">Hall of Fame</HiperLink>
                    <HiperLink likeButton href="https://google.com">About</HiperLink>
                    <HiperLink href="https://google.com">Log out</HiperLink>
                </ButtonsContainer>
            </Content>
        )
    }   
}