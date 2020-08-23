import React from 'react'
import './Home.css'

function Home(props) {

    return(
        <div className="Home" onClick={props.onClick}>
            <h1>The BOOK of ANSWERS</h1>
            <h1 className="TitleCN">答案之书</h1>
            <p>[Click to Ask Questions]</p>
            <u>点击屏幕开始提问</u>
        </div>
    )

}

export default Home;