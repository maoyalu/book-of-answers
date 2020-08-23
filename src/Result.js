import React from 'react';
import './Result.css'

function Result(props) {

    return(
        <div className="Result">
            <img src="loading.gif" alt="loading..."/>
            <p>{props.text}</p>
        </div>
    )
}

export default Result