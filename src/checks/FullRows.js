import React, { useState, useEffect } from 'react';
import DataTransform from '../blockMoves/DataTransform'

const dataTransform = new DataTransform()

export default class FullRows extends React.Component {

    check(currentArea) {
        const areaScheme = dataTransform.arrToScheme(currentArea)
        return areaScheme.some((el) => {
            return el.every((elem) => {
                return elem === 2
            })
        })
    }
}