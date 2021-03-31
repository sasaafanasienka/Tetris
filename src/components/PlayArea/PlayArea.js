import React, { useState } from 'react';
import './PlayArea.sass'
import colors from '../../constants/colors'
import { useSelector } from 'react-redux';

function PlayArea(props) {

    const playArea = useSelector(state => {return state.playArea})
    const currentBrick = useSelector(state => {return state.brick})
    const brick = currentBrick.brick
    const baseLine = currentBrick.baseLine
    const baseColumn = currentBrick.baseColumn
    const brickSideLength = brick.length

    function compileDataToArr() { //сложнючая функция, которая устанавливает фигуру на поле и преобразует все это в единый массив
        let dataArray = []
        for ( let i = 0; i < 24; i++) {
            if (i <= baseLine - brickSideLength || i > baseLine) { //если в строке нет движущейся фигуры
                dataArray = dataArray.concat(playArea[i]) //то оставляем поле как есть
            } else {
                for ( let a = 0; a < 10; a++ ) { //если движущаяся фигура есть, начинаем првоерять по колонкам
                    if ( a < baseColumn || a >= baseColumn + brickSideLength ) { //если фигуры нет в колонках
                        dataArray = dataArray.concat(playArea[i][a])  // тоже оставляем как есть
                    } else {
                        dataArray = dataArray.concat(brick[i - baseLine + brickSideLength - 1][a - baseColumn] + playArea[i][a]) //тут данные поля заменяются данными движ фигруы
                    }
                }
            }
        }
        return dataArray
    }

    function renderCells() {
        let cells = []
        let data = compileDataToArr()
        for (let i = 40; i < 240; i++) {
            if (data[i] === 0) {
                cells.push(
                    <div className='PlayArea__cell' key={`${i}`}></div>
            )} else {
                cells.push(
                    <div className={`PlayArea__cell_${colors[data[i]]}`} key={`${i}`}></div>
            )}
        }
        return cells
    }

    return(
        <div className="PlayArea">
            {renderCells()}
        </div>
        )
}

export default PlayArea;