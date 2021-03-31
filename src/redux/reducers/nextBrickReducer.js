import randomBrick from "../../utilits/randomBrick"
import { GENERATE_NEXT_BRICK } from "../types"

const initialBrick = {
    brick: [],
    baseLine: 0,
    baseColumn: 0,
}

export const nextBrickReducer = (state = initialBrick, action) => {
    switch(action.type) {
        case GENERATE_NEXT_BRICK:
            return action.payload
        default:
            return state
    }
}