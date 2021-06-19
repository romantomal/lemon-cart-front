import {ShoppingListAction, ShoppingListActionTypes} from "../../core/types/shoppingList";
import {Dispatch} from "react";
import axios from "axios";
import {ShoppingList} from "../../core/models/ShoppingList.model";


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

export const fetchUserShoppingLists = (userId: number, userToken: string) => {
    return async (dispatch: Dispatch<ShoppingListAction>) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${userToken}` }
            };
            const response = await axios.get(`http://localhost:5000/lists/user/${userId}`, config)
            dispatch({type: ShoppingListActionTypes.FETCH_USER_SHOPPING_LISTS, payload: response.data})
        } catch (e) {
            dispatch({
                type: ShoppingListActionTypes.FETCH_USER_SHOPPING_LISTS_ERROR,
                payload: 'Списки пользователя не найдены'})
        }
    }
}

export const createNewShoppingList = (list: ShoppingList, userToken: string) => {
    return async (dispatch: Dispatch<ShoppingListAction>) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${userToken}` }
            };
            const response = await axios.post(`http://localhost:5000/lists`, list, config)
            const {id, userId, name, shoppingList} = response.data;
            const newShoppingList = new ShoppingList(id, userId, name, shoppingList);
            dispatch({type: ShoppingListActionTypes.CREATE_SHOPPING_LIST, payload: newShoppingList})
        } catch (e) {
            dispatch({
                type: ShoppingListActionTypes.CREATE_SHOPPING_LIST_ERROR,
                payload: 'Не удалось создать список'})
        }
    }
}
