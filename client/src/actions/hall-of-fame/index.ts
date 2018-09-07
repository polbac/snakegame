import config from '../../config';
import { SAVE_RANKING } from '../actionTypes';

export const fetchRanking = () => {
    return (dispatch: any) => {
        fetch(
            `${config.serverUrl}/hall-of-fame`,
        )
        .then( response => response.json() )
        .then( ({hallOfFame}) => dispatch(saveRanking(hallOfFame) ))
        .catch(error => console.log(error) );
    }
}

export const saveRanking = (hallOfFame: any[]) => {
    
    return {
        type: SAVE_RANKING,
        hallOfFame,
    };
}