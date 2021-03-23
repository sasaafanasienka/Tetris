import React, { useState, useEffect } from 'react';
import freePlaceToMove from '../checks/freePlaceToMove';
import randomBlock from '../utilits/randomBlock'

export default class MoveDown extends React.Component {

    stopBlock(current) {

        const playField = current.playField
        const movingBrick = current.movingBrick
        const baseLine = current.baseLine
        const baseColumn = current.baseColumn
        const brickSize = current.movingBrick.length

        let newField = []
        for ( let i = 0; i < 24; i++) {
            if (i <= baseLine - brickSize || i > baseLine) { //если в строке нет движущейся фигуры
                newField.push(playField[i]) //то оставляем поле как есть
            } else {
                let newRow = []
                for ( let a = 0; a < 10; a++ ) { //если движущаяся фигура есть, начинаем првоерять по колонкам
                    if ( a < baseColumn || a >= baseColumn + brickSize ) { //если фигуры нет в колонках
                        newRow.push(playField[i][a])  // тоже оставляем как есть
                    } else {
                        if ([1,2,3,4,5,6,7].includes(movingBrick[i - baseLine + brickSize - 1][a - baseColumn])) { //тут данные поля заменяются данными движ фигруы
                            newRow.push(movingBrick[i - baseLine + brickSize - 1][a - baseColumn] + 10)
                        } else {
                            newRow.push(playField[i][a])
                        }
                    }
                }
                newField.push(newRow)
            }
        }

        const newScore = current.score + 1
        let newRecord = current.record
        if (newScore > current.record) {
            newRecord = newScore
            localStorage.setItem('record', newRecord)
        }

        return {
            playField: newField,
            movingBrick: [],
            baseLine: 3,
            baseColumn: 3,
            nextBrick: current.nextBrick,
            nextBaseColumn: current.nextBaseColumn,
            score: newScore,
            record: newRecord,
            bricksCount: current.bricksCount + 1,
        }
    }

    move(current) {

        const playField = current.playField
        let movingBrick = current.movingBrick
        const baseLine = current.baseLine + 1
        let baseColumn = current.baseColumn
        const brickSize = current.movingBrick.length

        if ( movingBrick.length === 0 ) {
            return current
        }
        if (baseLine > 23) {
            return this.stopBlock(current) 
        } else {
            if(freePlaceToMove( playField, movingBrick, baseLine, baseColumn, brickSize ) === false) {
                return this.stopBlock(current)
            }
        }

        return {
            playField: playField,
            movingBrick: movingBrick,
            baseLine: baseLine,
            baseColumn: baseColumn,
            nextBrick: current.nextBrick,
            nextBaseColumn: current.nextBaseColumn,
            score: current.score,
            record: current.record,
            bricksCount: current.bricksCount,
        }
    }
}