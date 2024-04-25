import { types } from "../types/type";

export const authReducer = (authState = {}, action) => {

    switch (action.type) {

        case types.LOGIN:
            return {
                ...action.payload,
                logged: true
            };

        case types.LOGOUT:
            return {
                logged: false
            };

        default:
            return authState;
    }
};


