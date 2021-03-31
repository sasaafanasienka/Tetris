import { combineReducers } from "redux";
import { playAreaReducer } from "./reducers/playAreaReducer";

const rootReducer = combineReducers({
    playArea: playAreaReducer,
})

export default rootReducer