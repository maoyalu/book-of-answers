import React, {useState} from 'react';
import './Result.css'

function Result(props) {

    return(
        <div className="Result">
            <img src="loading.gif"/>
            <p>{props.text}</p>
        </div>
    )
}

export default Result