import * as React from 'react';
import * as QRCode from 'qrcode.react';
import config from '../../config';

export default class HallOfFame extends React.Component<{}> {
    render(){
        return (
            <section>
                <QRCode value={config.appUrl} />
            </section>
        );
    }   
}