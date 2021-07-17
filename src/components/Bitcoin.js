import React,{useEffect, useState} from 'react'
import './Bitcoin.scss'

const url = 'https://api.cryptonator.com/api/ticker/btc-usd'

function UseEffectBitcoin() {
    
    const[isLoading, setIsLoading] = useState(true)
    const[isError, setIsError] = useState(false)
    const[bitcoin, setBitcoin] = useState([])
    
/*     const getBitcoin = async () => {
        const response = await fetch(url)
        const bitcoin = await response.json()
        setBitcoin(bitcoin.ticker)        
    } */
   useEffect(() => {
       fetch(url)
        .then((resp) => {
            if(resp.status >= 200 && resp.status <= 299){
                return resp.json();
            } else {
                setIsLoading(false);
                setIsError(true);
                throw new Error(resp.statusText);
            }
        })
        .then((bitcoin) => {
            const { ticker } = bitcoin;
            setBitcoin(ticker);
            setIsLoading(false);
        })
        .catch((error) => console.log(error))       
   }, [])

   if(isError){
       return (
           <div>
               <h1 style={{textAlign:"center"}}>loading...</h1>
           </div>
       )
   }

   if(isLoading){
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Error...Data is not get!</h1>
        </div>
    )
}
    
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
