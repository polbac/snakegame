import * as React from 'react';
import { connect } from 'react-redux';
import { AuthenticationProtection } from '../../components/authentication-protection';
import { View } from '../../types/view';
import { MainMenu } from '../../components/main-menu';

const mapStateToProps = (store: any) => store;

@connect(mapStateToProps)
export default class Snake extends React.Component<{}> {
    
    render() {
        const { game } = this.props as any;
        console.log(game);
        return (
            <AuthenticationProtection>
                { game.view === View.MAIN_MENU && <MainMenu />}
            </AuthenticationProtection>
        );
    }   
}