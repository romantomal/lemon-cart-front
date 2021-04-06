export interface AppState {
    isShowNavbar: boolean;
}

export enum AppActionTypes {
    SHOW_NAVBAR = "SHOW_NAVBAR",
    HIDE_NAVBAR = "HIDE_NAVBAR"
}

interface ShowNavbar {
    type: AppActionTypes.SHOW_NAVBAR
}
interface HideNavbar {
    type: AppActionTypes.HIDE_NAVBAR
}

export type AppAction =
    ShowNavbar
    | HideNavbar
