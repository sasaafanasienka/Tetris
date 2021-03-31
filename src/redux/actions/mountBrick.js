import { MOUNT_BRICK } from "../types";

export const mountBrick = (playArea, movingBrick) => {

    const brick = movingBrick.brick
    const baseLine = movingBrick.baseLine
    const baseColumn = movingBrick.baseColumn
    const brickSize = brick.length

    let newPlayArea = []
    for ( let i = 0; i < 24; i++) {
        if (i <= baseLine - brickSize || i > baseLine) { //если в строке нет движущейся фигуры
            newPlayArea.push(playArea[i]) //то оставляем поле как есть
        } else {
            let newRow = []
            for ( let a = 0; a < 10; a++ ) { //если движущаяся фигура есть, начинаем првоерять по колонкам
                if ( a < baseColumn || a >= baseColumn + brickSize ) { //если фигуры нет в колонках
                    newRow.push(playArea[i][a])  // тоже оставляем как есть
                } else {
                    if ([1,2,3,4,5,6,7].includes(brick[i - baseLine + brickSize - 1][a - baseColumn])) { //тут данные поля заменяются данными движ фигруы
                        newRow.push(brick[i - baseLine + brickSize - 1][a - baseColumn] + 10)
                    } else {
                        newRow.push(playArea[i][a])
                    }
                }
            }
            newPlayArea.push(newRow)
        }
    }

    return {
        type: MOUNT_BRICK,
        payload: newPlayArea
    }
}