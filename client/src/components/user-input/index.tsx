import * as React from 'react';
import { connect } from 'react-redux';
import * as Swipeable from 'react-swipeable'

import { heroMove } from '../../actions/game';
import { UserInputType } from '../../types/user-input';

const mapStateToProps = (store: any) => store.game;

@connect(mapStateToProps)
export class UserInput extends React.Component<{}> {
    
    swipingLeft = () => {
        this.dispatchUserInput(UserInputType.LEFT);
    }

    swipingRight = () => {
        this.dispatchUserInput(UserInputType.RIGHT);
    }

    swipingUp = () => {
        this.dispatchUserInput(UserInputType.UP);
    }

    swipingDown = () => {
        this.dispatchUserInput(UserInputType.DOWN);
    }

    dispatchUserInput = (type: UserInputType) => {
        const { dispatch } = this.props as any;
        dispatch(heroMove(type));

    }

    render() {
       return (
           <Swipeable
                onSwipingLeft={this.swipingLeft}
                onSwipingRight={this.swipingRight}
                onSwipingUp={this.swipingUp}
                onSwipedDown={this.swipingDown}
           >
                {this.props.children}
           </Swipeable>
       );
    }   
}