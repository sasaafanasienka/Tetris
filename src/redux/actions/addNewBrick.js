import randomBrick from "../../utilits/randomBrick";
import { ADD_NEW_BRICK } from "../types";

export const addNewBrick = () => {
    return {
        type: ADD_NEW_BRICK,
        payload: randomBrick()
    }
}