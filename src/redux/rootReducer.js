import { combineReducers } from "redux";
import { brickReducer } from "./reducers/brickReducer";
import { playAreaReducer } from "./reducers/playAreaReducer";

const rootReducer = combineReducers({
    playArea: playAreaReducer,
    brick: brickReducer
})

export default rootReducer