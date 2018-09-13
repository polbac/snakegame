import * as React from 'react';
import { connect } from 'react-redux';
import * as Swipeable from 'react-swipeable'

import { heroMove } from '../../actions/game';
import { Vec } from 'commons/types/vector';
import { Content } from '../layout'; 

const mapStateToProps = (store: any) => store.game;

@connect(mapStateToProps)
export class UserInput extends React.Component<{}> {
    
    swipingLeft = () => {
        this.dispatchUserInput(Vec.left());
    }

    swipingRight = () => {
        this.dispatchUserInput(Vec.right());
    }

    swipingUp = () => {
        this.dispatchUserInput(Vec.down());
    }

    swipingDown = () => {
        this.dispatchUserInput(Vec.up());
    }

    dispatchUserInput = (direction: Vec) => {
        const { dispatch } = this.props as any;
        dispatch(heroMove(direction));

    }

    render() {
       return (
            <Content game>
                <Swipeable
                        onSwipingLeft={this.swipingLeft}
                        onSwipingRight={this.swipingRight}
                        onSwipingUp={this.swipingUp}
                        onSwipedDown={this.swipingDown}
                >
                        {this.props.children}
                </Swipeable>
            </Content>
       );
    }   
}
