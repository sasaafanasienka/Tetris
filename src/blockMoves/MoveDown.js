import React, { useState, useEffect } from 'react';
// import addNewBlock from '../gameEvents/addNewBlock';
import DataTransform from './DataTransform'
let dataTransform = new DataTransform()

export default class MoveDown extends React.Component {

    stopBlock(currentArea) {
        let newArea = []
        for (let row = 0; row < 24; row++) {
            if (!currentArea[row].includes(1)) {
                newArea.push(currentArea[row])
            } else {
                let newRow = []
                currentArea[row].forEach((el) => {
                    if (el === 1) {
                        newRow.push(2)
                    } else {
                        newRow.push(el)
                    }
                })
                newArea.push(newRow)
            }
        }
        return newArea
    }

    // removeFullRows(area) {
    //     let filteredArea = area.filter((row) => {
    //         return row.some((el) => {
    //             return el === 0
    //         })
    //     })
    //     return area
    // }

    move(currentArea) {
        let newArea = []
        let areaInArray = dataTransform.schemeToArr(currentArea)
        let stoppedBlocks = areaInArray.map((el) => {
            return el === 2 ? el = 2 : el = 0
        })
        let movingBlocks = areaInArray.map((el) => {
            return el === 1 ? el = 1 : el = 0
        })
        for (let i = 0; i < 10; i++) {
            const deleteLastElem = movingBlocks.pop()
            if (deleteLastElem === 1) {
                return this.stopBlock(currentArea)
            }
        }
        for ( let i = 0; i < 10; i++) {
            movingBlocks.unshift(0)
        }
        for (let i = 0; i < 240; i++) {
            const sum = stoppedBlocks[i] + movingBlocks[i]
            if (sum < 2) {
                newArea.push(sum)
            } else {
                return this.stopBlock(currentArea)
            }
        }
        return dataTransform.arrToScheme(newArea)
    }
}