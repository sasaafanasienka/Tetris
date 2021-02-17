import React, { useState, useEffect } from 'react';
import DataTransform from './DataTransform'
let dataTransform = new DataTransform()

export default class MoveDown extends React.Component {

    move(scheme) {
        const newArea = dataTransform.schemeToArr(scheme)
        const oldArea = dataTransform.schemeToArr(scheme)
        for (let i = newArea.length; i >= 0; i--) {
            if (newArea[i] === 1) {
                if (i + 10 < 200 || newArea[i + 10] === 0) {
                    newArea[i] = 0;
                    newArea[i + 10] = 1;
                } else {
                    var stoppedArea = oldArea.map(function(el) {
                        if (el === 1) { return el = 2; } else { return el }
                      });
                    return dataTransform.arrToScheme(stoppedArea)
                }
            }
        }
        return dataTransform.arrToScheme(newArea)
    }
}