import { MOVE_RIGHT } from "../types";
import {store} from '../../index'
import freePlaceToMove from "../../checks/freePlaceToMove";

export const moveRight = () => {
    const brick = store.getState().brick
    const playArea = store.getState().playArea
    const offset = freePlaceToMove('right', playArea, brick.brick, brick.baseLine, brick.baseColumn + 1) ? 1 : 0
    return {
        type: MOVE_RIGHT,
        payload: {
            brick: brick.brick,
            baseLine: brick.baseLine,
            baseColumn: brick.baseColumn + offset
        }
    }
}