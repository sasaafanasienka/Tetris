import React, { useState, useEffect } from 'react';

function Controls(props) {

    return(
        <button className='button' onClick={props.startGame}>Start game
        </button>
        )
}

export default Controls;