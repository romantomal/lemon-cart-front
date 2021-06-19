export interface IShoppingListItem {
    _id: number;
    name: string;
    quantity: string;
}

export interface IShoppingList {
    id: number;
    userId: number;
    name: string;
    shoppingList: IShoppingListItem[];
}

export interface ShoppingListState {
    lists: IShoppingList[];
    activeList: IShoppingList;
    error: string;
}

export enum ShoppingListActionTypes {
    FETCH_SHOPPING_LIST_BY_ID = 'FETCH_SHOPPING_LIST_BY_ID',
    FETCH_SHOPPING_LIST_ERROR = 'FETCH_SHOPPING_LIST_ERROR',
    FETCH_USER_SHOPPING_LISTS = 'FETCH_USER_SHOPPING_LISTS',
    FETCH_USER_SHOPPING_LISTS_ERROR = 'FETCH_USER_SHOPPING_LISTS_ERROR',
    CREATE_SHOPPING_LIST = 'CREATE_SHOPPING_LIST',
    CREATE_SHOPPING_LIST_ERROR = 'CREATE_SHOPPING_LIST_ERROR'
}

interface FetchShoppingListAction {
    type: ShoppingListActionTypes.FETCH_SHOPPING_LIST_BY_ID;
    payload: IShoppingList
}

interface FetchShoppingListErrorAction {
    type: ShoppingListActionTypes.FETCH_SHOPPING_LIST_ERROR;
    payload: string
}

interface FetchUserShoppingListsAction {
    type: ShoppingListActionTypes.FETCH_USER_SHOPPING_LISTS;
    payload: IShoppingList[]
}

interface FetchUserShoppingListsErrorAction {
    type: ShoppingListActionTypes.FETCH_USER_SHOPPING_LISTS_ERROR;
    payload: string
}

interface CreateShoppingListAction {
    type: ShoppingListActionTypes.CREATE_SHOPPING_LIST;
    payload: IShoppingList
}

interface CreateShoppingListErrorAction {
    type: ShoppingListActionTypes.CREATE_SHOPPING_LIST_ERROR;
    payload: string
}

export type ShoppingListAction =
    FetchShoppingListAction |
    FetchShoppingListErrorAction |
    FetchUserShoppingListsAction |
    FetchUserShoppingListsErrorAction |
    CreateShoppingListAction |
    CreateShoppingListErrorAction
