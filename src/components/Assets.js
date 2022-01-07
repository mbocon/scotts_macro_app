import React from 'react'
import '../App.css'

function Assets(props) {
    console.log(props.apiData, 'are assets props')
    // const { btc1, btc2, oil1, oil2, gas1, gas2, gold1, gold2 } = props.apiData
    // console.log(btc1, 'is btc1', btc2, 'is btc2', oil1, 'is oil1', oil2, 'is oil2', gas1, 'is gas1', gas2, 'is gas2', gold1, 'is gold1', gold2, 'is gold2')
    return (
        <>
            <article className="assetsArticle">
                <h2>Assets</h2>
                <div className='assetsDiv2'>
                    <ul className='assetsUl'>
                        <span>BTC</span>
                        <li className='assetsLi'>Current: ${props.apiData[0].btc1} Previous Month: ${props.apiData[1].btc2}</li>
                        <span>CRUDE OIL</span>
                        <li className='assetsLi'>Current: ${props.apiData[2].oil1} Previous Month: ${props.apiData[3].oil2}</li>
                        <span>Regular Gas Per Gallon</span>
                        <li className='assetsLi'>Current: ${props.apiData[4].gas1} Previous Month: ${props.apiData[5].gas2}</li>
                        <span>GOLD PER OZ</span>
                        <li className='assetsLi'>Current: ${props.apiData[6].gold1} Previous Month: ${props.apiData[7].gold2}</li>
                    </ul>
                </div>
            </article>
        </>
    )
}

export default Assets
