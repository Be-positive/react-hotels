import React,{useEffect, useState} from 'react'
import './Bitcoin.scss'

const url = 'https://api.cryptonator.com/api/ticker/btc-usd'

function UseEffectBitcoin() {
    
    const[bitcoin, setBitcoin] = useState([])

    const getBitcoin = async () => {
        const response = await fetch(url)
        const bitcoin = await response.json()
        setBitcoin(bitcoin.ticker)        
    }

   useEffect(() => {
       getBitcoin()
   }, [])
    
    return (
        <>
        <div className="bitcoinHead">
            <h2>Pay via <span> <a target="_blank" rel="noreferrer" href="https://www.bitcoin.com/">Bitcoin</a> </span> anyway and anytime</h2>
            <h3>safe booking  with current price</h3>
            <p>Current Bitcoin ({bitcoin.base}) price is about {Math.floor(bitcoin.price)} {bitcoin.target} </p>
        </div>
        
        
            
        </>
    )
}

export default UseEffectBitcoin
