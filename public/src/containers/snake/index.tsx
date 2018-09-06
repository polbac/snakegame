import * as React from 'react';
import { connect } from 'react-redux';
import { AuthenticationProtection } from '../../components/authentication-protection';
const mapStateToProps = (store: any) => store.game;

@connect(mapStateToProps)
export default class Snake extends React.Component<{}> {
    
    render() {
        return (
            <AuthenticationProtection>
                Snake
            </AuthenticationProtection>
        );
    }   
}