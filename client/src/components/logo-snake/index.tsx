import * as React from 'react';
import styled from "styled-components";


export const TrocaSnake = styled.img.attrs({
    alt:'TrocaSnake',
    src: 'https://via.placeholder.com/900x150'
})`
    max-width:100%;
    margin: 0 auto;
`


export default class LogoSnake extends React.Component {
    render(){
        return (
            <TrocaSnake/>
        );
    }
}