import * as React from 'react';
import { connect } from 'react-redux';
import { saveSession } from '../../actions/authenticate';
import { Image8Bit } from '../Image8bit';


const browser: any = window;

const mapStateToProps = (store: any) => store.authenticate;

type AuthenticationProtectionState = {
    loading: boolean,
}

@connect(mapStateToProps)
export class AuthenticationProtection extends React.Component<{}, AuthenticationProtectionState> {
    
    constructor(props: any) {
        super(props);

        this.state = {
            loading: true,
        }
        
        browser.onLinkedInLoad = () => {
            this.getProfileData();
            browser.IN.Event.on(browser.IN, "auth", (session: any) => this.getProfileData);
        }
    }

    getProfileLinkedin = (session: any) => {
        const { dispatch } = this.props as any;
        dispatch(
            saveSession(session)
        );
        
        this.setState({
            loading: false,
        })
    }

    onLinkedinError(error: any) {
        console.log('error', error) 
    }

    getProfileData() {
        browser.IN.API.Raw("/people/~:(picture-url,firstName,headline,id)")
               .result(this.getProfileLinkedin)
               .error(this.onLinkedinError);
    }

    startGame = () => {
        const { dispatch } = this.props as any;
    }

    render() {
        const { session } = this.props as any;

        if (this.state.loading === true) {
            return <div>Cargando...</div>;
        }
        
        if (session === null) {
            return <script type="in/Login"></script>;
        }

        const { pictureUrl, firstName } = session; 

        return (<div>
            <h1>Trocasnake!</h1>
            <p>Bienvenido {firstName}!</p>
            <p>
                <Image8Bit src={pictureUrl} />
            </p>

            
            <p><button>Comenzar a jugar</button></p>
            <p><button onClick={this.startGame}>Hall of Fame</button></p>
        </div>)
        // return this.props.children;
    }   
}
