import * as React from 'react';
import { Image8Bit } from '../Image8bit';
import * as Style from './style'

interface RankingItemProps {
    data: any;
}

export default class RankingItem extends React.Component <RankingItemProps> {
    render(){
        const { name, avatar, score, ranking } = this.props.data;

        return (
            <Style.ListItem>
                <Style.RankingPosition>
                    <span>{ranking}</span>
                </Style.RankingPosition>
                <Style.Avatar>
                    <Image8Bit src={avatar} squares={40} />
                </Style.Avatar>
                <Style.Name>
                    <span>{name}</span>
                </Style.Name>
                <Style.Score>
                    <span>{score}</span>
                </Style.Score>
            </Style.ListItem>
        );
    }
}