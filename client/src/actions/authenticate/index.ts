import { SAVE_SESSION } from '../actionTypes'
import config from '../../config';

export const saveSession = (session: any) => {
    return (dispatch: any) => {
            fetch(
                `${config.serverURL}/authenticate`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(session),
                },
            )
            .then( () => {
                dispatch({
                    type: SAVE_SESSION,
                    session,
                });
            })
            .catch(error => console.log(error) );
    }
}