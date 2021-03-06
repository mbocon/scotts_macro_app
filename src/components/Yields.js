import React from 'react'
import '../App.css'

function Yields({ tbond1, tbond2, aaaBond1, aaaBond2 }) {
    return (
        <>
            <article className="yieldArticle">
            <h2>Yields</h2>
                <div className='yieldDiv2'>
                    <ul className='yieldUl'>
                        <li className='yieldLi'>Current: {tbond1}% Previous Month: {tbond2}%</li>
                        <li className='yieldLi'>Current: {aaaBond1}% Previous Month: {aaaBond2}%</li>
                    </ul>
                </div> 
            </article>
        </>
    )
}

export default Yields
