import React, { useState, useEffect } from 'react';

export default class MovingBlock extends React.Component {

    check(currentArea) {
        console.log(currentArea)
        return currentArea.some((row) => {
            return row.includes(1)
        })
    }
}