import * as React from 'react';
import { connect } from 'react-redux';
import * as QRCode from 'qrcode.react';
import config from '../../config';
import RankingItem from '../../components/ranking-item';
import { Link } from 'react-router-dom';

const mapStateToProps = (state: any) => state.hallOfFame;
  

@connect(mapStateToProps)
export class HallOfFame extends React.Component<{}> {
    render(){
        const { ranking } = this.props as any;
        return (
            <section className="content">
                <QRCode value={config.appUrl} />
                {ranking.map( (item: any) => <RankingItem data={item} />)}
                <Link to='/'><button>Back to menu</button></Link>
            </section>
        );
    }   
}