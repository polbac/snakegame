import * as React from 'react';
import { connect } from 'react-redux';
import { AuthenticationProtection } from '../../components/authentication-protection';
import { View } from '../../types/view';
import { MainMenu } from '../../components/main-menu';
import { UserInput } from '../../components/user-input';
import { GameEngine } from '../../components/game-engine';
import { GameFrame } from '../../components/game-frame';
import { GameOver } from '../../components/game-over';

import { Wrapper } from '../../components/layout';
 
const mapStateToProps = (store: any) => store;

@connect(mapStateToProps)
export default class Snake extends React.Component<{}> {
    
    render() {
        const { game } = this.props as any;

        return ( 
            <Wrapper>
                <AuthenticationProtection>
               
                    { game.view === View.MAIN_MENU && <MainMenu />}
                    
                    { game.view === View.GAME && (
                        <UserInput>
                            <GameEngine>
                                <GameFrame />
                            </GameEngine>
                        </UserInput>
                    )}
                    
                    { game.view === View.GAME_OVER && <GameOver />}
                
                </AuthenticationProtection>
            </Wrapper>
        );
    }   
}