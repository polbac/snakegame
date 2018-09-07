
export const live = (state = {}, action: any): any => {
    switch (action.type) {

        case 'SAVE_LIVE' : {
            return {
                live: action.live
            }
        }


        default : {
            return state
        }
    }
}
