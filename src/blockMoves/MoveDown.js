import React, { useState, useEffect } from 'react';
import freePlaceToMove from '../checks/freePlaceToMove';
import randomBlock from '../gameEvents/randomBlock'

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
                        if (movingBrick[i - baseLine + brickSize - 1][a - baseColumn] === 1) { //тут данные поля заменяются данными движ фигруы
                            newRow.push(2)
                        } else {
                            newRow.push(playField[i][a])
                        }
                    }
                }
                newField.push(newRow)
            }
        }

        const newBrick = randomBlock()

        return {
            playField: newField,
            movingBrick: newBrick.brick,
            baseLine: 3,
            baseColumn: newBrick.baseColumn,
            score: current.score,
            speed: current.speed,
            gemeStatus: current.gemeStatus
        }
    }

    move(current) {

        const playField = current.playField
        const movingBrick = current.movingBrick
        const baseLine = current.baseLine + 1
        const baseColumn = current.baseColumn
        const brickSize = current.movingBrick.length

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
            score: current.score,
            speed: current.speed,
            gemeStatus: current.gemeStatus
        }
    }
}