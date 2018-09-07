import * as React from 'react';
import { Image8Bit } from '../Image8bit';
import styled from "styled-components";

export const ListItem = styled.li`
    width: 100%;
    display: block;
    margin-bottom:10px;

    :last-child{
        margin-bottom:0;
    }
`;

export const RankingPosition = styled.div`
    display: inline-block;
    width: 80px;
    color: #fff;
    margin-right:15px;
    background-color: #3684c6;
    box-shadow: 3px 3px 0 0 #a0d0fe;
    font-size: 45px;
    font-weight: bold;
    color: #ffffff;
`;

export const CenterVH = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height: 80px;
`

export const UserInfo = styled.div`
    height: 80px;
    display: inline-block;
    width: calc(100% - 175px);
    vertical-align:top;
    padding: 0 30px;
    box-shadow: 3px 3px 0 0 #d1e8fc;
    background-color: #ffffff;
    border: solid 3px #3684c6;
    border-left:none;
`

export const CenterV = styled.div`
    display:flex;
    align-items:center;
    height: 70px;
`
export const Avatar = styled.div`
    display: inline-block;
    width: 80px;
    height:80px;
    vertical-align: top;
`;

export const Name = styled.span`
    display: inline-block;
    width: 50%;
    vertical-align: middle;
    font-size: 32px;
    color: #3684c6;
`;

export const Score = styled.span`
    display: inline-block;
    width: 50%;
    vertical-align: middle;
    text-align: right;
    font-size: 22px;
    color: #4a90e2;
`;

export const ScoreLabel = styled.span`
    font-size: 32px;
    color: #4a90e2;
`;
export const ScoreNumber = styled.span`
    font-size: 32px;
    font-weight: bold;
    color: #ffd56b;
    text-shadow: 2px 2px 0 #e8696b;
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
                    <CenterVH>
                      <span>{ranking}</span>  
                    </CenterVH>
                </RankingPosition>
                <Avatar>
                    <Image8Bit src={avatar} squares={40} />
                </Avatar>
                <UserInfo>
                    <CenterV>
                        <Name>
                            {name}
                        </Name>
                        <Score>
                            <ScoreLabel>SCORE:</ScoreLabel>
                            <ScoreNumber>{score}</ScoreNumber>
                        </Score>
                    </CenterV>
                </UserInfo>
            </ListItem>
        );
    }
}