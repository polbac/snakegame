import * as React from 'react';
import styled from "styled-components";


export const Block = styled.div`
    margin:80px 0 20px 0;
`;


export default class LinkedinButton extends React.Component {
    render(){
        return (
            <Block>{this.props.children}</Block>
        );
    }
}