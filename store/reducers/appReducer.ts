import {AppAction, AppActionTypes, AppState} from "../../core/types/app";

const initialState: AppState = {
    isShowNavbar: true,
    isShowLoader: false
}

export const appReducer = (state = initialState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionTypes.SHOW_NAVBAR:
            return {...state, isShowNavbar: true}
        case AppActionTypes.HIDE_NAVBAR:
            return {...state, isShowNavbar: false}
        case AppActionTypes.SHOW_LOADER:
            return {...state, isShowLoader: true}
        case AppActionTypes.HIDE_LOADER:
            return {...state, isShowLoader: false}
        default:
            return state
    }
}
