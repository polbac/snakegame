import React, { Component } from 'react';

export default class AuthenticationProtection extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
        }
    }

    componentDidlMount(){
       
    }

    render() {
        const { authenticated } = this.state;
        
        if (!authenticated) {
            return <script type="in/Login"></script>;
        }
        
        return this.props.children;
    }   
}