import { REMOVE_FULL_ROWS } from "../types"

export default function removeFullRows(playArea, fullRowsQuan) {
    // debugger

    let rowsIndexes = []
    let newplayArea = playArea.filter((elem, index) => {
        if (elem.some((el) => { return el <= 10 })) {
            return elem
        } else {
            rowsIndexes.push(index)
        }
    })

    newplayArea = new Array(fullRowsQuan).fill([0,0,0,0,0,0,0,0,0,0]).concat(newplayArea)

    return dispatch => {
        // setTimeout(() => {
            dispatch(animationIteration(playArea, rowsIndexes, 0))
        // }, 10)
        setTimeout(() => {
            dispatch(finallyRemoveFullRows(newplayArea))
        }, 720)
    }
}

const animationIteration = (playArea, rowsIndexes, iteration) => {
    console.log(iteration)
    const newplayArea = playArea.map((row, index) => {
        return rowsIndexes.includes(index) ? 
            row.map((el, idx) => {
                return idx < iteration ? 0 : el
            }) : row
    })
    return {
        type: REMOVE_FULL_ROWS,
        payload: newplayArea,
    }
}

const finallyRemoveFullRows = (newplayArea) => {
    return {
        type: REMOVE_FULL_ROWS,
        payload: newplayArea,
    }
}