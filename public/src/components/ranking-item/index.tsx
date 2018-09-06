import * as React from 'react';
import * as style from './style.css'
import { Image8Bit } from '../Image8bit';

interface RankingItemProps {
    data: any;
}

export default class RankingItem extends React.Component <RankingItemProps> {
    render(){
        const { name, avatar, score, ranking } = this.props.data;

        return (
            <div className={ style['Ranking-item'] }>
                <div className={ style['ranking'] }>
                    <span>{ranking}</span>
                </div>
                <div className={ style['avatar']}>
                    <Image8Bit src={avatar} squares={40} />
                </div>
                <div className={ style['name'] }>
                    <span>{name}</span>
                </div>
                <div className={ style['score'] }>
                    <span>{score}</span>
                </div>
            </div>
        );
    }
}