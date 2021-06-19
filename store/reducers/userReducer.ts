import {UserAction, UserActionTypes, UserState} from "../../core/types/user";

const initialState: UserState = {
    user: null,
    error: null,
    userFetched: false
}

export const UserReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.LOGIN:
            return {...state, user: action.payload, userFetched: true};
        case UserActionTypes.LOGOUT:
            return {...state, user: action.payload, userFetched: true};
        case UserActionTypes.REGISTER:
            return {...state, user: action.payload, userFetched: true};
        case UserActionTypes.LOAD_USER_FROM_STORAGE:
            return {...state, user: action.payload, userFetched: true};
        case UserActionTypes.LOGIN_ERROR:
            return {...state, error: action.payload, userFetched: true};
        case UserActionTypes.REGISTER_ERROR:
            return {...state, error: action.payload, userFetched: true};
        default:
            return state;
    }
}
