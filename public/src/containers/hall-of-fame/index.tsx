import * as React from 'react';
import { connect } from 'react-redux';
import * as QRCode from 'qrcode.react';
import config from '../../config';

const mapStateToProps = (state: any) => state.hallOfFame;
  

@connect(mapStateToProps)
export class HallOfFame extends React.Component<{}> {
    render(){
        const { ranking } = this.props as any;
        console.log(ranking);
        return (
            <section>
                <QRCode value={config.appUrl} />
            </section>
        );
    }   
}