
import * as React from 'react';
import Snake from './containers/snake';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HallOfFame } from './containers/hall-of-fame';
import './App.css';
import { connect } from 'react-redux';
import { showMainMenu } from './actions/game';
import { endGame } from './actions/game';

@connect(state => state)
export default class App extends React.Component<{}> {
    
    componentDidMount() {
        const { dispatch } = this.props as any;
        dispatch(endGame());
    }
    render(){
        return (
            <Router>
                <div>
                    <Route exact  path="" component={ Snake }/>
                    <Route path="/hall-of-fame" component={ HallOfFame }/>
                </div>
            </Router>
        );
    }
}

