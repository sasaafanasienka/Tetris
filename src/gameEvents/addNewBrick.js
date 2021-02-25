import scoreTable from '../constants/scoreTable'
import randomBlock from '../utilits/randomBlock'

export default function addNewBrick(current) {

    if (current.nextBrick.length === 0){
        let movingBrick = randomBlock()
        let nextBrick = randomBlock()
        return {
            playField: current.playField,
            movingBrick: movingBrick.brick,
            baseLine: 3,
            baseColumn: movingBrick.baseColumn,
            nextBrick: nextBrick.brick,
            nextBaseColumn: nextBrick.baseColumn,
            score: current.score,
            record: current.record,
            bricksCount: current.bricksCount,
        }
    } else {
        let nextBrick = randomBlock()
        return {
            playField: current.playField,
            movingBrick: current.nextBrick,
            baseLine: 3,
            baseColumn: current.nextBaseColumn,
            nextBrick: nextBrick.brick,
            nextBaseColumn: nextBrick.baseColumn,
            score: current.score,
            record: current.record,
            bricksCount: current.bricksCount,
        }
    }
}