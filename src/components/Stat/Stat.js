import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Stat.sass'

function Stat() {

    const currentScore = useSelector(state => {return state.score.score})
    const currentRecord = useSelector(state => {return state.score.record})
    const currentLevel = useSelector(state => {return state.level.level})

    return(
        <div className='Stat'>
            <p className='Stat__title'>SCORE:</p>
            <p className='Stat__score'>{currentScore}</p>
            <p className='Stat__title'>BEST:</p>
            <p className='Stat__score'>{currentRecord}</p>
            <p className='Stat__title'>SPEED:</p>
            <p className='Stat__score'>{currentLevel}</p>
        </div>
        )
}

export default Stat;