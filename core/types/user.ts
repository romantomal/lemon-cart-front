export interface IUser {
    _id: number;
    email: string;
    token: string;
    roles: string[];
}

export interface UserState {
    user: IUser;
    error: string;
}

export enum UserActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    REGISTER = 'REGISTER',
    LOAD_FROM_STORAGE = 'LOAD_FROM_STORAGE',
    LOGIN_ERROR = 'LOGIN_ERROR',
    REGISTER_ERROR = 'REGISTER_ERROR',
}

interface LoginUserAction {
    type: UserActionTypes.LOGIN;
    payload: IUser
}

interface LogoutUserAction {
    type: UserActionTypes.LOGOUT;
    payload: IUser
}

interface RegisterUserAction {
    type: UserActionTypes.REGISTER;
    payload: IUser
}

interface loadUserFromStorageAction {
    type: UserActionTypes.LOAD_FROM_STORAGE;
    payload: IUser
}

interface LoginErrorAction {
    type: UserActionTypes.LOGIN_ERROR;
    payload: string
}

interface RegisterErrorAction {
    type: UserActionTypes.REGISTER_ERROR;
    payload: string
}

export type UserAction =
    LoginUserAction |
    LogoutUserAction |
    RegisterUserAction |
    loadUserFromStorageAction |
    LoginErrorAction |
    RegisterErrorAction
