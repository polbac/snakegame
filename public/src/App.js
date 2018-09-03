import React, { Component } from 'react';
import AuthenticationProtection from './components/authentication-protection';
import Snake from './containers/snake';



export default class App extends Component {
    
    render(){
        return (
            <AuthenticationProtection>
                <Snake />
            </AuthenticationProtection>
        );
    }
}