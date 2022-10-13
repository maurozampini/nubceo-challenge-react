import { types } from '../types/types';

const initialState = {
    uid: "",
    checking: true,
    email: "",
    name: ""
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_LOGIN:
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.AUTH_CHECKING_FINISH:
            return {
                ...state,
                checking: false
            }

        case types.AUTH_LOGOUT:
            return {
                ...state,
                ...action.payload,
                checking: false
            }

        case types.REGISTER_CHECKING_FINISH:
            return {
                checking: false
            }

        default:
            return state;
    }

}
