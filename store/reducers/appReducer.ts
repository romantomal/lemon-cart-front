import {AppAction, AppActionTypes, AppState} from "../../core/types/app";

const initialState: AppState = {
    isShowNavbar: true
}

export const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionTypes.SHOW_NAVBAR:
            return {...state, isShowNavbar: true}
        case AppActionTypes.HIDE_NAVBAR:
            return {...state, isShowNavbar: false}
        default:
            return state
    }
}
