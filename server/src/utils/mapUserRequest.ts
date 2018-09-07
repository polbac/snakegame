import { User } from "../types/user";


export const mapUserRequest = (user: any): User => {
    const { id, firstName, lastName, headline, pictureUrl } = user;

    return <User>{
        id,
        name: `${firstName} ${lastName}`,
        headline,
        avatar: pictureUrl,
        username: hackerName(firstName, lastName)
    };
}

export const hackerName = (firstName: string, lastName: string): string => {
    return `${firstName.substring(0, 3)}-${lastName.substring(0, 3)}`;
}