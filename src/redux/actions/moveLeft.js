import { MOVE_LEFT } from "../types";
import {store} from '../../index'

export const moveLeft = () => {
    const brick = store.getState().brick

    return {
        type: MOVE_LEFT,
        payload: {
            brick: brick.brick,
            baseLine: brick.baseLine,
            baseColumn: brick.baseColumn - 1
        }
    }
}