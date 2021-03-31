import { ADD_NEW_BRICK, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, REMOVE_BRICK, ROTATE } from "../types"

const initialBrick = {
    brick: [],
    baseLine: 0,
    baseColumn: 0
}

export const brickReducer = (state = initialBrick, action) => {
    switch(action.type) {
        case ADD_NEW_BRICK:
            return action.payload
        case REMOVE_BRICK:
            return initialBrick
        case MOVE_DOWN:
            return action.payload
        case MOVE_LEFT:
            return action.payload
        case MOVE_RIGHT:
            return action.payload
        case ROTATE:
            return action.payload
        default:
            return state
    }
}