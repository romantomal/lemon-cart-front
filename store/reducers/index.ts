import {combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import {appReducer} from "./appReducer";
import {ShoppingListReducer} from "./shoppingListReducer";
import {UserReducer} from "./userReducer";

const rootReducer = combineReducers({
    app: appReducer,
    shoppingList: ShoppingListReducer,
    user: UserReducer
})

export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }
        if (state.count) nextState.count = state.count
        return nextState
    } else {
        return rootReducer(state, action)
    }
}

export type RootState = ReturnType<typeof rootReducer>
