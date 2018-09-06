import * as React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store: any) => store.authenticate;

@connect(mapStateToProps)
export class AuthenticationProtection extends React.Component {

    componentDidMount(){
       
    }

    render() {
        const { session } = this.props as any;
        
        if (session === null) {
            return <script type="in/Login"></script>;
        }
        
        return this.props.children;
    }   
}