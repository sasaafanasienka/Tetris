import React, { useState, useEffect } from 'react';
import './Stat.sass'

function Stat(props) {

    return(
        <div className='Stat'>
            <p className='Stat__title'>Score:</p>
            <p className='Stat__score'>{props.score}</p>
            <p className='Stat__title'>Best:</p>
            <p className='Stat__score'>0</p>
        </div>
        )
}

export default Stat;