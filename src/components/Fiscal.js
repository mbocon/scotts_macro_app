import React from 'react'
import '../App.css'


function Fiscal(props) {
    const { debtGdp1, debtGdp2, tradeBal1, tradeBal2, sod1, sod2, gdp1, gdp2 } = props.apiData
    return (
        <>
        <article className="fiscalArticle">
        <h2>Fiscal</h2>
            <div className='fiscalDiv2'>
                <ul className='fiscalUl'>
                    <span>Debt:GDP</span>
                    <li className='fiscalLi'>Current: {debtGdp1}% Previous Month: {debtGdp2}%</li>
                    <span>Trade Balance</span>
                    <li className='fiscalLi'>Current: ${tradeBal1} Previous Month: ${tradeBal2}</li>
                    <span>Monthly Surplus/Deficit</span>
                    <li className='fiscalLi'>Current: ${sod1} Previous Month: ${sod2}</li>
                    <span>GDP</span>
                    <li className='fiscali'>Current: ${gdp1} Previous Month: ${gdp2}</li>
                    {/* <img src="https://fred.stlouisfed.org/graph/fredgraph.png?g=KvuD" alt="" /> */}
                </ul>
            </div>
        </article>
        </>
    )
}

export default Fiscal
