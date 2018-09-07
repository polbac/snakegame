import * as React from 'react';
import styled from "styled-components";

export const TrocaSnakeVertical = styled.img.attrs({
    alt:'TrocaSnake',
    src: '../assets/images/troca-snake-vertical.svg'
})`
    max-width:100%;
    margin: 0 auto;
`

export default class LogoSnakeVertical extends React.Component {
    render(){
        return (
            <TrocaSnakeVertical/>
        );
    }
}
