import React from 'react'
import './Cookie.scss';

const Cookie = () => {
    return (
        <React.Fragment>
            <div className='cookie'>
                <p className='cookieText'>
                We use cookies to offer you the best user experience and enhance the quality of our site. 
            You can find out more about which cookies we use and how to manage them individually by clicking on Cookie Settings.                              
                </p>
                <div className='twoButtonsCo'>
                    <button className='firstButton'>Cookie Settings</button>
                    <button className='secondButton'>Accept & Close</button>                
                </div>           
            </div>                                  
        </React.Fragment>
    )
}

export default Cookie
