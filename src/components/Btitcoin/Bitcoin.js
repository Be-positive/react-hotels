import React,{useEffect, useState} from 'react'
import './Bitcoin.scss'

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

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
            console.log(bitcoin.disclaimer)
            console.log(bitcoin.time)
            console.log(bitcoin.time.updated)
            console.log(bitcoin.bpi.EUR.rate)
            console.log(bitcoin.bpi.EUR.code)

            const { disclaimer } = bitcoin;
            setBitcoin(disclaimer);
            setIsLoading(false);
        })
        .catch((error) => console.log(error))       
   }, [])
   console.log({bitcoin})

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
            <h3>Modern option, pay via <span> <a target="_blank" rel="noreferrer" href="https://www.bitcoin.com/">Bitcoin</a> </span> anyway and anytime</h3>
            <h4>safe booking  with current price</h4>
            {/* <p>Current Bitcoin price is about {(bitcoin.disclaimer)} </p> */}
        </div>       
        </>
    )
}

export default UseEffectBitcoin
