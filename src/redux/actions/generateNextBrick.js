import randomBrick from "../../utilits/randomBrick";
import { GENERATE_NEXT_BRICK } from "../types";

export const generateNextBrick = () => {
    return {
        type: GENERATE_NEXT_BRICK,
        payload: randomBrick()
    }
}