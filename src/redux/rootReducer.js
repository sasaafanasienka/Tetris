import { combineReducers } from "redux";
import { brickReducer } from "./reducers/brickReducer";
import { nextBrickReducer } from "./reducers/nextBrickReducer";
import { playAreaReducer } from "./reducers/playAreaReducer";
import { scoreReducer } from "./reducers/scoreReducer";

const rootReducer = combineReducers({
    playArea: playAreaReducer,
    brick: brickReducer,
    nextBrick: nextBrickReducer,
    score: scoreReducer,
})

export default rootReducer