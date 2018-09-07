import * as React from 'react';
import styled from "styled-components";
import { fontColor } from '../../utils/colors';


export const P = styled.p`
    font-size:13px;
    color: ${fontColor};
    margin-bottom:20px;
`;


export default class LogoSnake extends React.Component {
    render(){
        return (
            <P>{this.props.children}</P>
        );
    }
}