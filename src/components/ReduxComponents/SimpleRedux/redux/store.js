import { combineReducers,createStore } from "redux";
import updateNumber from "./reducers/reducer";

const rootReducer = combineReducers({
    counter: updateNumber,
})

export const store = createStore( rootReducer )