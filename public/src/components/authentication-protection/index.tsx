import * as React from 'react';
import { connect } from 'react-redux';
import { saveSession } from '../../actions/authenticate';

const browser: any = window;

const mapStateToProps = (store: any) => store.authenticate;

@connect(mapStateToProps)
export class AuthenticationProtection extends React.Component {

    constructor(props: any) {
        super(props);

        
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
    }

    onLinkedinError(error: any) {
        console.log('error', error) 
    }

    getProfileData() {
        browser.IN.API.Raw("/people/~:(picture-url,firstName,headline,id)")
               .result(this.getProfileLinkedin)
               .error(this.onLinkedinError);
    }

    render() {
        const { session } = this.props as any;
        if (session === null) {
            return <script type="in/Login"></script>;
        }
        const { pictureUrl, firstName } = session; 
        return (<div>
            <h1>Trocasnake!</h1>
            <p>Bienvenido {firstName}!</p>
            <p><img src={pictureUrl} /></p>
            <button>Comenzar a jugar</button>
        </div>)
        // return this.props.children;
    }   
}

