import React, { useState, useEffect } from 'react';

export default class MovingBlock extends React.Component {

    check(currentArea) {
        return currentArea.includes((el) => {
            return el === 1
        })
    }
}