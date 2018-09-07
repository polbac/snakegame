import { combineReducers } from 'redux'
import { game } from './game';
import { hallOfFame } from './hall-of-fame';
import { authenticate } from './authenticate';

export default combineReducers({
    game,
    hallOfFame,
    authenticate,
  })