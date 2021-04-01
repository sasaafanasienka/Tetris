import { REMOVE_FULL_ROWS } from "../types"

export default function removeFullRows(playArea, fullRowsQuan) {

    let newplayArea = playArea.filter(elem => elem.some((el) => { return el <= 10 }))
    newplayArea = new Array(fullRowsQuan).fill([0,0,0,0,0,0,0,0,0,0]).concat(newplayArea)

    return {
        type: REMOVE_FULL_ROWS,
        payload: newplayArea,
    }
}