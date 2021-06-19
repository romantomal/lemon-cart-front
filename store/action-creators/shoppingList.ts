import {IShoppingList, ShoppingListAction, ShoppingListActionTypes} from "../../core/types/shoppingList";
import {Dispatch} from "react";
import axios from "axios";
import {CreateShoppingList, ShoppingList} from "../../core/models/ShoppingList.model";
import {IUser} from "../../core/types/user";


export const fetchShoppingListById = (shoppingListId: string | string[]) => {
    return async (dispatch: Dispatch<ShoppingListAction>) => {
        try {
            const response = await axios.get(`http://localhost:5000/lists/${shoppingListId}`)
            dispatch({type: ShoppingListActionTypes.FETCH_SHOPPING_LIST_BY_ID, payload: response.data})
        } catch (e) {
            dispatch({
                type: ShoppingListActionTypes.FETCH_SHOPPING_LIST_ERROR,
                payload: 'Не удалось найти список'})
        }
    }
}

export const fetchUserShoppingLists = (user: IUser) => {
    return async (dispatch: Dispatch<ShoppingListAction>) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${user.token}` }
            };
            const response = await axios.get(`http://localhost:5000/lists/user/${user._id}`, config);
            dispatch({type: ShoppingListActionTypes.FETCH_USER_SHOPPING_LISTS, payload: response.data});
        } catch (e) {
            dispatch({
                type: ShoppingListActionTypes.FETCH_USER_SHOPPING_LISTS_ERROR,
                payload: 'Списки пользователя не найдены'})
        }
    }
}

export const createNewShoppingList = (list: CreateShoppingList, userToken: string) => {
    return async (dispatch: Dispatch<ShoppingListAction>) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${userToken}` }
            };
            const response = await axios.post(`http://localhost:5000/lists`, list, config);
            const {id, userId, name, shoppingList} = response.data;
            const newShoppingList = new ShoppingList(id, userId, name, shoppingList);
            dispatch({type: ShoppingListActionTypes.CREATE_SHOPPING_LIST, payload: newShoppingList});
        } catch (e) {
            dispatch({
                type: ShoppingListActionTypes.CREATE_SHOPPING_LIST_ERROR,
                payload: 'Не удалось создать список'})
        }
    }
}

export const setActiveShoppingList = (shoppingList: IShoppingList) => {
    return async (dispatch: Dispatch<ShoppingListAction>) => {
        if (!shoppingList) {
            dispatch({type: ShoppingListActionTypes.SET_ACTIVE_SHOPPING_LIST, payload: null});
        }
        dispatch({type: ShoppingListActionTypes.SET_ACTIVE_SHOPPING_LIST, payload: shoppingList});
    }
}
