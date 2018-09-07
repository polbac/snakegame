import { SAVE_RANKING } from "../actions/actionTypes";

const INIT_STATE_HALL_OF_FAME: any = {
    ranking: [],
};

export const hallOfFame = (state = INIT_STATE_HALL_OF_FAME, action: any): any => {
    switch (action.type) {
        case SAVE_RANKING : {
            return {
                ranking: action.hallOfFame
            }   
        }
        
        default:
            return state
    }
}
