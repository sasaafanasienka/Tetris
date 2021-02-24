import scoreTable from '../constants/scoreTable'
import randomBlock from '../utilits/randomBlock'

export default function addNewBrick(current) {

    const newBrick = randomBlock()

    return {
        playField: current.playField,
        movingBrick: newBrick.brick,
        baseLine: current.baseLine,
        baseColumn: newBrick.baseColumn,
        score: current.score,
        speed: current.speed,
    }
}