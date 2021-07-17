import React, {useState, useEffect} from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const[menu, setMenu] = useState(false)
    const clickHandler = () => setMenu(!menu)  

    const[hideMenu, setHideMenu] = useState(false)
    
    const showMenu = () => {
        if(window.innerWidth <= 840){            
            setHideMenu(true)
            let btn1 = document.getElementById('btnBook')
            btn1.innerHTML = 'BOOK'            
        } else {            
            setHideMenu(false)
            let btn2 = document.getElementById('btnBook')
            btn2.innerHTML = 'BOOK ONLINE'
        }
             
            
        }
    
    useEffect(() => {
        window.addEventListener('resize', showMenu) 
    }, [])          

    return (
        <React.Fragment>
            <nav className='navbar'>
                
                <div className='navbar-container'>
                    {hideMenu && <div className="menu-btn" onClick={clickHandler}>
                      <i className={menu ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>}
                    <Link to='/' className='logo' style={{textDecoration:'none'}}><h1>Eco & Deluxe</h1></Link>
                    {!hideMenu && <ul className='navbar-items'>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links'>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' >
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/job' className='nav-links' >
                                Job
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/hotels' className='nav-links' >
                                Hotels
                            </Link>
                        </li>                                          
                                        
                    </ul>}
                    <button id="btnBook" className='btnSignUp'>BOOK ONLINE</button>
                



                </div>
                {/* {hideMenu && <div className="menu-btn" onClick={clickHandler}>
                    <i className={menu ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>}
                <h2>Eco & Deluxe</h2>                
                {!hideMenu && <ul className='navbar-items'>
                    <li>Home</li>                    
                    <li>Product</li>                    
                    <li>Price</li>                    
                    <li>Services</li>                   
                                        
                </ul>}
                <button className='btnSignUp'>BOOK ONLINE</button> */}            
            </nav>                                  
        </React.Fragment>
    )
}

export default Navbar
