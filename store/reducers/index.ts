import {combineReducers} from "redux";
import {HYDRATE} from "next-redux-wrapper";
import {appReducer} from "./appReducer";

const rootReducer = combineReducers({
    app: appReducer
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
