import { combineReducers } from "redux";
import { brickReducer } from "./reducers/brickReducer";
import { nextBrickReducer } from "./reducers/nextBrickReducer";
import { playAreaReducer } from "./reducers/playAreaReducer";

const rootReducer = combineReducers({
    playArea: playAreaReducer,
    brick: brickReducer,
    nextBrick: nextBrickReducer,
})

export default rootReducer