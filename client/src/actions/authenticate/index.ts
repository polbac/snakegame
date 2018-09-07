import { SAVE_SESSION } from '../actionTypes'
import config from '../../config';

export const saveSession = (session: any) => {
    return (dispatch: any) => {
            fetch(
                `${config.serverUrl}/authenticate`,
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(session),
                },
            )
            .then( response => response.json())
            .then( (data: any) => {
                console.log(data)
                dispatch({
                    type: SAVE_SESSION,
                    session: data.userInformation,
                });
            })
            .catch(error => console.log(error) );
    }
}