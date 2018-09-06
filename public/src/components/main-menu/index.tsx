import * as React from 'react';
import { connect } from 'react-redux';
import { Image8Bit } from '../Image8bit';
import { navigateToGame } from '../../actions/navigate';

import { Link } from 'react-router-dom';

const mapStateToProps = (store: any) => store.authenticate;

@connect(mapStateToProps)
export class MainMenu extends React.Component<{}> {

    render() {
        const { session, dispatch } = this.props as any;
        const { pictureUrl, firstName } = session; 

        return (
            <section>
                <h1>Trocasnake!</h1>
                <p>Bienvenido {firstName}!</p>
                <p>
                    <Image8Bit src={pictureUrl} squares={20} />
                </p>

                
                <p><button onClick={ () => dispatch(navigateToGame()) }>Comenzar a jugar</button></p>
                <Link to='/hall-of-fame'><button>Hall of Fame</button></Link>
            </section>
        )
    }   
}
