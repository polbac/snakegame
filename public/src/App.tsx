import * as React from 'react';
import Snake from './containers/snake';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HallOfFame } from './containers/hall-of-fame';
import './App.css';

export default class App extends React.Component<{}> {
    
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