import { SAVE_SESSION } from '../actionTypes'

export const saveSession = (session: any) => {
    return {
        type: SAVE_SESSION,
        session,
    };
}