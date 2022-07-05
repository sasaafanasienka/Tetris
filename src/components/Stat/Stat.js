import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Stat.sass'

function Stat() {

    const currentScore = useSelector(state => {return state.score.score})
    const score = useSelector(state => {return state.score})
    const currentRecord = useSelector(state => {return state.score.record})
    const currentLevel = useSelector(state => { return state.level.level })

    console.log(score)
    
    return(
        <div className='Stat'>
            <p className='Stat__title'>SCORE:</p>
            <p className='Stat__score'>{currentScore}</p>
            <p className='Stat__title'>BEST:</p>
            <p className='Stat__score'>{currentRecord}</p>
            <p className='Stat__title'>SPEED:</p>
            <p className='Stat__score'>{currentLevel}</p>
            <div className={`Stat__animate ${score.animation}`}>
                {score.animationValue}
            </div>
        </div>
        )
}

export default Stat;