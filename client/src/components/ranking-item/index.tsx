import * as React from 'react';
import { Image8Bit } from '../Image8bit';
import styled from "styled-components";

export const ListItem = styled.div`
    width: 100%;
    display: block;
    border-bottom: 1px solid #eee;
    padding: 15px; 
`;

export const RankingPosition = styled.div`
    display: inline-block;
    width: 15%;
    vertical-align: middle;
`;

export const Avatar = styled.div`
    display: inline-block;
    width: 10%;
    vertical-align: middle;
    max-width: 50px;
    background: red;
`;

export const Name = styled.div`
    display: inline-block;
    width: 50%;
    vertical-align: middle;
`;

export const Score = styled.div`
    display: inline-block;
    width: 25%;
    vertical-align: middle;
    text-align: right;
`;

interface RankingItemProps {
    data: any;
}

export default class RankingItem extends React.Component <RankingItemProps> {
    render(){
        const { name, avatar, score, ranking } = this.props.data;

        return (
            <ListItem>
                <RankingPosition>
                    <span>{ranking}</span>
                </RankingPosition>
                <Avatar>
                    <Image8Bit src={avatar} squares={40} />
                </Avatar>
                <Name>
                    <span>{name}</span>
                </Name>
                <Score>
                    <span>{score}</span>
                </Score>
            </ListItem>
        );
    }
}