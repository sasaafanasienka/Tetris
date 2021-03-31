import { ADD_NEW_BRICK_FROM_NEXT } from "../types";

export const addNewBrickFromNext = (nextBrick) => {
    return {
        type: ADD_NEW_BRICK_FROM_NEXT,
        payload: nextBrick
    }
}