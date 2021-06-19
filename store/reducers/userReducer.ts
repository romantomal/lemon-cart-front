import {UserAction, UserActionTypes, UserState} from "../../core/types/user";

const initialState: UserState = {
    user: null,
    error: null,
}

export const UserReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {...state, user: action.payload};
        case UserActionTypes.LOGOUT:
            return {...state, user: action.payload};
        case UserActionTypes.REGISTER:
            return {...state, user: action.payload};
        case UserActionTypes.LOAD_FROM_STORAGE:
            return {...state, user: action.payload};
        case UserActionTypes.LOGIN_ERROR:
            return {...state, error: action.payload};
        case UserActionTypes.REGISTER_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}
