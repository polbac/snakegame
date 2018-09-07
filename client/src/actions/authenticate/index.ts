import { SAVE_SESSION } from '../actionTypes'

export const saveSession = (session: any) => {
    return (dispatch: any) => {
        setTimeout(() => {
          console.log('hoal');
        }, 1000);
      };
    /* return {
        type: SAVE_SESSION,
        session,
    }; */
}