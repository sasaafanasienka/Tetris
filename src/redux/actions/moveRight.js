import { MOVE_RIGHT } from "../types";
import {store} from '../../index'

export const moveRight = () => {
    const brick = store.getState().brick
    console.log('right')

    return {
        type: MOVE_RIGHT,
        payload: {
            brick: brick.brick,
            baseLine: brick.baseLine,
            baseColumn: brick.baseColumn + 1
        }
    }
}