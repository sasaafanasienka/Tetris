import { MOUNT_BRICK, REMOVE_FULL_ROWS } from "../types"

const initialArea = new Array(24).fill([0,0,0,0,0,0,0,0,0,0])

export const playAreaReducer = (state = initialArea, action) => {
    switch(action.type) {
        case MOUNT_BRICK:
            return action.payload
        case REMOVE_FULL_ROWS:
            return action.payload
        default:
            return state
    }
}