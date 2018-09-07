import { combineReducers } from 'redux'
import { game } from './game';
import { hallOfFame } from './hall-of-fame';
import { authenticate } from './authenticate';
import { live } from './live';

export default combineReducers({
    game,
    hallOfFame,
    authenticate,
    live,
  })