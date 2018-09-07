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
    background-color: #4a90e2;
    margin-right:15px;
`;

export const CenterVH = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height: 80px;
`

export const UserInfo = styled.div`
    height: 80px;
    background-color: #ffffff;
    border: solid 5px #4a90e2;
    border-left:none;
    display: inline-block;
    width: calc(100% - 180px);
    vertical-align:top;
    padding: 0 30px;
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
    font-size: 22px;
    color: #4a90e2;
`;

export const Score = styled.span`
    display: inline-block;
    width: 50%;
    vertical-align: middle;
    text-align: right;
    font-size: 22px;
    color: #4a90e2;
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
                      <span>1{ranking}</span>  
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
                            2121212{score}
                        </Score>
                    </CenterV>
                </UserInfo>
            </ListItem>
        );
    }
}