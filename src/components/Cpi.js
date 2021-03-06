import React from 'react'
import '../App.css'


export default function Cpi({ cpi1, cpi2, ppi1, ppi2 }) {
    return (
        <>
            <article className="cpiArticle">
            <h2>Consumer Price Inflation</h2>
                <div className='cpiDiv'>
                    <ul className='cpiUl'>
                        <li className='cpiLi'>Current: {cpi1} Previous Month: {cpi2}</li>
                        <li className='cpiLi'>Current: {ppi1} Previous Month: {ppi2}</li>
                    </ul>
                </div>
            </article>
        </>
    )
}
