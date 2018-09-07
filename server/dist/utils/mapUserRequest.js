"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapUserRequest = (user) => {
    const { id, firstName, lastName, headline, pictureUrl } = user;
    return {
        id,
        name: `${firstName} ${lastName}`,
        headline,
        avatar: pictureUrl,
        username: exports.hackerName(firstName, lastName)
    };
};
exports.hackerName = (firstName, lastName) => {
    return `${firstName.substring(0, 3)}-${lastName.substring(0, 3)}`;
};
//# sourceMappingURL=mapUserRequest.js.map