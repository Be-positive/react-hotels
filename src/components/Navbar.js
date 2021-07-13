import React, {useState} from 'react'
import './Navbar.css';

const Navbar = () => {
    const[menu, Setmenu] = useState()

    const clickHandler = () => Setmenu(!menu)    

    return (
        <React.Fragment>
            <nav className='navbar'>
                <div className="menu-btn" onClick={clickHandler}>
                    <i className={menu ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className='navbar-items'>
                    <li>Home</li>                    
                    <li>Product</li>                    
                    <li>Price</li>                    
                    <li>Services</li>                    
                </ul>            
            </nav>                                  
        </React.Fragment>
    )
}

export default Navbar
