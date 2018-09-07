import * as React from 'react';
import styled from "styled-components";

export const TrocaSnakeHorizontal = styled.img.attrs({
    alt:'TrocaSnake',
    src: '../assets/images/troca-snake-horizontal.svg'
})`
    max-width:100%;
    margin: 0 auto;
`

export default class LogoSnakeHorizontal extends React.Component {
    render(){
        return (
            <TrocaSnakeHorizontal/>
        );
    }
}