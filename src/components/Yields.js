import React from 'react'
import '../App.css'

function Yields(props) {
    return (
        <>
            <article className="yieldArticle">
                <h2>Yields</h2>
                <div className='yieldDiv2'>
                    <ul className='yieldUl'>
                        <span>Ten Year Treasury</span>
                        <li className='yieldLi'>Current: {props.apiData[8].tbond1}% Previous Month: {props.apiData[9].tbond2}%</li>
                        <span>AAA Corp Bond Index</span>
                        <li className='yieldLi'>Current: {props.apiData[10].aaaBond1}% Previous Month: {props.apiData[11].aaaBond2}%</li>
                    </ul>
                </div>
            </article>
        </>
    )
}

export default Yields
