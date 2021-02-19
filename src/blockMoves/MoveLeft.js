import React, { useState, useEffect } from 'react';
import DataTransform from './DataTransform'
let dataTransform = new DataTransform()

export default class MoveLeft extends React.Component {

    move(scheme) {
        const newArea = dataTransform.schemeToArr(scheme)
        const oldArea = dataTransform.schemeToArr(scheme)
        for (let i = 0; i < newArea.length; i++) {
            if (newArea[i] === 1) {
                if (i.toString().slice(-1) !== '0' && newArea[i - 1] === 0) {
                    newArea[i] = 0;
                    newArea[i - 1] = 1;
                } else {
                    return dataTransform.arrToScheme(oldArea)
                }
            }
        }
        return dataTransform.arrToScheme(newArea)
    }
}