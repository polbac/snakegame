import * as React from 'react';
import { connect } from 'react-redux';
import { AuthenticationProtection } from '../../components/authentication-protection';
import { View } from '../../types/view';
import { MainMenu } from '../../components/main-menu';
import { UserInput } from '../../components/user-input';

const mapStateToProps = (store: any) => store;

@connect(mapStateToProps)
export default class Snake extends React.Component<{}> {
    
    render() {
        const { game } = this.props as any;

        return (
            <AuthenticationProtection>
                { game.view === View.MAIN_MENU && <MainMenu />}
                { game.view === View.GAME && (
                    <UserInput>
                        holis
                    </UserInput>
                )}
            </AuthenticationProtection>
        );
    }   
}