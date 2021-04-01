import { COUNT_ROWS } from "../types";

export const countRows = (rowsToAdd, levelObj) => {

    const currentRows = levelObj.rows
    const newLevel = levelObj.level < 10 ? 1 + Math.floor((currentRows + rowsToAdd) / 15) : levelObj.level
    const newSpeed = newLevel !== levelObj.level ? 
        800 - Math.floor((Math.sin(Math.PI/2 - Math.PI/18 * (10 - newLevel))) * 650) : //синусоидная зависимость скорости от уровня
        levelObj.speed

    return {
        type: COUNT_ROWS,
        payload: {
            rows: currentRows + rowsToAdd,
            level: newLevel,
            speed: newSpeed
        }
    }
}