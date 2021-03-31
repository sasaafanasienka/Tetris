import { MOVE_DOWN } from "../types";
import {store} from '../../index'

export const moveDown = () => {
    const brick = store.getState().brick
    return {
        type: MOVE_DOWN,
        payload: {
            brick: brick.brick,
            baseLine: brick.baseLine + 1,
            baseColumn: brick.baseColumn
        }
    }
}