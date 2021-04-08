export interface AppState {
    isShowNavbar: boolean;
    isShowLoader: boolean;
}

export enum AppActionTypes {
    SHOW_NAVBAR = "SHOW_NAVBAR",
    HIDE_NAVBAR = "HIDE_NAVBAR",
    SHOW_LOADER = "SHOW_LOADER",
    HIDE_LOADER = "HIDE_LOADER",
}

interface ShowNavbar {
    type: AppActionTypes.SHOW_NAVBAR
}
interface HideNavbar {
    type: AppActionTypes.HIDE_NAVBAR
}
interface ShowLoader {
    type: AppActionTypes.SHOW_LOADER
}
interface HideLoader {
    type: AppActionTypes.HIDE_LOADER
}

export type AppAction =
    ShowNavbar
    | HideNavbar
    | ShowLoader
    | HideLoader
