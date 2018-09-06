import { combineReducers } from 'redux'
import { game } from './game';
import { hallOfFame } from './hall-of-fame';

export default combineReducers({
    game,
    hallOfFame
  })