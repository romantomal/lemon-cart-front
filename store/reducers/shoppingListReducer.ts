import {ShoppingListAction, ShoppingListActionTypes, ShoppingListState} from "../../core/types/shoppingList";

const initialState: ShoppingListState = {
    lists: [],
    activeList: null,
    error: ''
}

export const ShoppingListReducer = (state = initialState, action: ShoppingListAction): ShoppingListState => {
    switch (action.type) {
        case ShoppingListActionTypes.FETCH_SHOPPING_LIST_BY_ID:
            return {...state, lists: [...initialState.lists, action.payload], activeList: action.payload};
        case ShoppingListActionTypes.FETCH_SHOPPING_LIST_ERROR:
            return {...state, error: action.payload};
        case ShoppingListActionTypes.FETCH_USER_SHOPPING_LISTS:
            return {...state, lists: action.payload};
        case ShoppingListActionTypes.FETCH_USER_SHOPPING_LISTS_ERROR:
            return {...state, error: action.payload};
        case ShoppingListActionTypes.CREATE_SHOPPING_LIST:
            return {...state, lists: [...initialState.lists, action.payload]};
        case ShoppingListActionTypes.CREATE_SHOPPING_LIST_ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}
