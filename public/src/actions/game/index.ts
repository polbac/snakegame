import { UserInputType } from './../../types/user-input';
import { HERO_MOVE } from "../actionTypes";

export const heroMove = (type: UserInputType) => {
    return {
        type: HERO_MOVE,
        userInput: type,
    }
}