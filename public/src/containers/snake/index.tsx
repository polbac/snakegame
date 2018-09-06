import * as React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (store: any) => store.game;

@connect(mapStateToProps)
export default class Snake extends React.Component<{}> {
    
    render() {
        
        return (
            <main>
                Snake
            </main>
        );
    }   
}