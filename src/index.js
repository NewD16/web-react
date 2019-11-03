import React from 'react'
import {render} from 'react-dom'

function MyClock() {
    return (
        <div>
            <h3>Real Time: {(new Date()).toDateString()}</h3>
        </div>
        
    )
    
}

render(
    <MyClock/>,
    document.getElementById('root')
);
