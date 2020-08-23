import React, {useState} from 'react';
import Result from './Result'
import './Ask.css'

function Ask() {
    let [selectedAnswer, setSelectedAnswer] = useState('')

    var allText;
    var answers; 

    function readTextFile(file)
    {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = () => {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status === 0)
                {
                    allText = rawFile.responseText;
                    answers = allText.split("\n");
                }
            }
        }
        rawFile.send(null);
    }

    const answer = () => {
        let rand = answers[Math.floor(Math.random() * answers.length)]
        console.log(rand)
        setSelectedAnswer(rand)
    }

    readTextFile('answers.txt')

    return(
        <div>
            <p className="Label">Question</p>
            <textarea  type="text" />
            <br /><button onClick={() => answer()}>GET ANSWER!</button>
            <p className="Label">Answer</p>
            <Result text={selectedAnswer}/>
        </div>
    )
}

export default Ask