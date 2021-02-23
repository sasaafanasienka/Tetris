import React, { useState, useEffect } from 'react';
import './Stat.sass'

function Stat(props) {

    return(
        <div className='Stat'>
            <p className='Stat__title'>SCORE:</p>
            <p className='Stat__score'>{props.score}</p>
            <p className='Stat__title'>BEST:</p>
            <p className='Stat__score'>0</p>
        </div>
        )
}

export default Stat;