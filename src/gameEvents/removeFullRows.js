import blockExamples from '../constants/blockExamples'
import DataTransform from '../blockMoves/DataTransform'

const dataTransform = new DataTransform()

export default function removeFullRows(currentArea) {
    const emptyRow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    let newArea = []
    const areaArray = dataTransform.arrToScheme(currentArea)
    for (let i = 0; i < 24; i++) {
        if (areaArray[i].some((el) => { return el < 2 })) {
            newArea.push(areaArray[i])
        }
    }
    console.log(newArea)
    console.log(newArea.length)
    for ( let a = 0; a < 24 - newArea.length; a++ ) {
        newArea.splice(0, 0, emptyRow)
    }

    return dataTransform.schemeToArr(newArea)
}