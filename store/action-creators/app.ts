import {AppAction, AppActionTypes} from "../../core/types/app";


export const showNavbar = (): AppAction => {
    return {type: AppActionTypes.SHOW_NAVBAR}
}
export const hideNavbar = (): AppAction => {
    return {type: AppActionTypes.HIDE_NAVBAR}
}
