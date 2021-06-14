import {Dispatch} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {UserAction, UserActionTypes} from "../../core/types/user";

export const loginUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        const body = {email, password};
        try {
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/login`, body);
            const {id, email, roles}: any = jwt_decode(data.token);
            localStorage.setItem('userToken', data.token)
            dispatch({type: UserActionTypes.LOGIN, payload: {_id: id, email: email, token: data.token, roles: roles}});
        } catch (e) {
            dispatch({type: UserActionTypes.LOGIN_ERROR, payload: 'Не удалось войти. Проверьте е-мейл или пароль'});
        }
    }
}

export const registerUser = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        const body = {email, password};
        try {
            const {data} = await axios.post(`${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/register`, body);
            const {id, email, roles}: any = jwt_decode(data.token);
            localStorage.setItem('userToken', data.token)
            dispatch({type: UserActionTypes.REGISTER, payload: {_id: id, email: email, token: data.token, roles: roles}});
        } catch (e) {
            dispatch({type: UserActionTypes.REGISTER_ERROR, payload: 'Не удалось создать нового пользователя'});
        }
    }
}

export const loadUserFromStorage = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        const token = localStorage.getItem('userToken');
        if (token) {
            const {id, email, roles}: any = jwt_decode(token);
            dispatch({ type: UserActionTypes.LOAD_FROM_STORAGE, payload: {_id: id, email: email, token: token, roles: roles}});
        }
    }
}
