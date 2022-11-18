import React from 'react'
import './Cookie.scss';

const Cookie = () => {
    const closeCookie = (e) => {   
        e.stopPropagation()        
        let closeCookie1 = document.getElementById('cookieId')        
        closeCookie1.style.display = 'none'        
    }
    return (
        <React.Fragment>
            <div className='cookie' id='cookieId'>
                
                <p className='cookieText'>
                We use cookies to offer you the best user experience and enhance the quality of our site. 
            You can find out more about which cookies we use and how to manage them individually by clicking on Cookie Settings.                              
                </p>
                <div className='twoButtonsCo'>
                    <button className='firstButton'>Cookie Settings</button>
                    <button className='secondButton' onClick={closeCookie}>Accept & Close</button>                
                </div>           
            </div>                                  
        </React.Fragment>
    )
}

export default Cookie
