import { MOVE_LEFT } from "../types";
import {store} from '../../index'
import freePlaceToMove from "../../checks/freePlaceToMove";

export const moveLeft = () => {
    const brick = store.getState().brick
    const playArea = store.getState().playArea
    const offset = freePlaceToMove('left', playArea, brick.brick, brick.baseLine, brick.baseColumn - 1) ? -1 : 0
    return {
        type: MOVE_LEFT,
        payload: {
            brick: brick.brick,
            baseLine: brick.baseLine,
            baseColumn: brick.baseColumn + offset
        }
    }
}