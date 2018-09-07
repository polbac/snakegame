import * as React from 'react';
import styled from "styled-components";

export const TrocaSnake = styled.div`
    max-width: 200px;
    margin: 0 auto 45px auto;
`;

export const Image = styled.img`
    max-width:100%;
`;


export default class LogoSnake extends React.Component {
    render(){
        return (
            <TrocaSnake>
                <Image src="https://via.placeholder.com/180x50" alt="" />
            </TrocaSnake>
        );
    }
}