import { SAVE_SESSION } from "actions/actionTypes";



const INIT_STATE_AUTHENTICATE: any = {
    session: null,
};

export const authenticate = (state = INIT_STATE_AUTHENTICATE, action: any): any => {

    switch (action.type) {
        case 'SAVE_SESSION' : {
            const { session } = action;
            return {
                session,
            }
        } 
    }

    return state;
}