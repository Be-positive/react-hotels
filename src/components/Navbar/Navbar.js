import React, {useState, useEffect} from 'react'
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {


    const[menu, setMenu] = useState(false)

    const clickHandler = () => {        
        if(menu === false && window.innerWidth <= 840){
            setMenu(true)            
            var list1 = document.getElementById('menuList')
            list1.style.display = 'flex'
            let closeBtn2 = document.getElementById('closeBooking')               
            closeBtn2.style.transform = 'translate3d(200vw, 0, 0)'                                          
            let btnBook2 = document.getElementById('bookingForm')               
            btnBook2.style.transform = 'translate3d(200vw, 0, 0)'
            
        }
        else if(menu === true && window.innerWidth <= 840){ 
            setMenu(false)                      
            var menu2 = document.getElementById('menuList')
            menu2.style.display ='none'
        }

    }  

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
        window.addEventListener('resize', showList) 
    }, []) 

    const showList = () => {
        if(window.innerWidth > 840){          
            var list1 = document.getElementById('menuList')
            list1.style.display = 'flex' 
        } else {
            setMenu(false)
            var list2 = document.getElementById('menuList')
            list2.style.display = 'none'
        }       
           
    }
    useEffect(() => {               
        if(window.innerWidth <= 840){            
            setHideMenu(true)
            let btn1 = document.getElementById('btnBook')
            btn1.innerHTML = 'BOOK'
        }         
        window.addEventListener('resize', showMenu)
        return () => {            
            window.removeEventListener('resize', showMenu)
        } 
    },[]);
    
    /* const[bookBtn, setBookBtn] = useState(false) */

    const boockClick = (e) => {   
        e.stopPropagation()
        /* e.preventDefault() */
        let closeBtn1 = document.getElementById('closeBooking')        
        closeBtn1.style.transform = 'translate3d(0vw, 0, 0)'                                  
        let btnBook1 = document.getElementById('bookingForm')              
        btnBook1.style.transform = 'translate3d(0vw, 0, 0)'
        
        /* btnBook1.classList.add('show') */
        if(window.innerWidth<=840){
            setMenu(false)                      
            var menu2 = document.getElementById('menuList')
            menu2.style.display ='none' 
        }        
    } 
    const finishBook = (e) => {
        e.stopPropagation()        
        let closeBtn2 = document.getElementById('closeBooking')               
        closeBtn2.style.transform = 'translate3d(200vw, 0, 0)'                                          
        let btnBook2 = document.getElementById('bookingForm')               
        btnBook2.style.transform = 'translate3d(200vw, 0, 0)'      
    }
    
    const bookButton = (e) => {
        e.stopPropagation()
        let closeBtn3 = document.getElementById('closeBooking')               
        closeBtn3.style.transform = 'translate3d(200vw, 0, 0)'                                          
        let btnBook3 = document.getElementById('bookingForm')               
        btnBook3.style.transform = 'translate3d(200vw, 0, 0)'
        /* const adultInfo = document.getElementById('adult')
        console.log(adultInfo.valueAsNumber) */
    }

    const handleSubmit = (e) => {
        e.preventDefault()                        
    }
    //prevent default - prevent Default behavior we doing how i want! 

    return (
        <React.Fragment>
            <nav className='navbar'>
                
                <div className='navbar-container'>
                    {hideMenu && <div className="menu-btn" onClick={clickHandler}>
                      <i className={menu ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>}
                    <Link to='/' className='logo' style={{textDecoration:'none'}}><h1>Eco & Deluxe</h1></Link>
                    {/* {!hideMenu && */} <ul className='navbar-items' id="menuList">
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
                                        
                    </ul>
                    <button id="btnBook" onClick={boockClick} >BOOK ONLINE</button>
                    <div className='formBook'>
                        <button id='closeBooking' onClick={finishBook}>CLOSE</button>
                        <form id='bookingForm' action="#" onSubmit={handleSubmit}>
                            <ul>
                                <li ><input className='date' type="date" defaultValue="2021-07-19" min="2021-07-19" max="2022-12-31"></input></li>
                                <li><input className='date' type="date" defaultValue="2021-07-20" min="2021-07-20" max="2022-12-31"/></li>
                                <li> 
                                    <label htmlFor="adult">Adult(s)</label>
                                    <input type="number"  id="adult" name="adult" min="1" max="30" placeholder='1'></input>
                                </li>
                                <li>
                                    <label htmlFor="child">Child(ren)</label>
                                    <input type="number" id="child" name="child" min="0" max="30" placeholder='0'></input>
                                </li>
                                <li>
                                    <label htmlFor='hotel'>Hotel</label>
                                    <select name="hotel" id="hotel">
                                       <option value="2">Luxury</option>
                                       <option value="boutiqe">Boutique</option>
                                       <option value="holiday">Holiday</option>
                                       <option value="family">Family</option>
                                    </select>
                                </li> 
                                <li>
                                <label htmlFor="country">Country</label>
                                <select name="country" id="country">
                                <option value="2">Singapore</option>                                
                                <option value="cambodia">Cambodia</option>
                                <option value="indoneisia">Indoneisia</option>
                                <option value="malaysia">Malaysia</option>
                                <option value="myanmar">Myanmar</option>
                                <option value="philippines">Philippines</option>
                                <option value="brunei">Brunei </option>
                                <option value="thailand">Thailand</option>
                                <option value="timor">Thimor-Leste</option>
                                <option value="vietnam">Viet Nam</option>
                                </select>
                                </li>                                                      
                                <li>
                                    <button id="hideBtn" onClick={bookButton} >
                                        <Link className="booking" to='/hotels'>BOOK</Link>
                                    </button>
                                </li>
                            </ul>
                        </form>                        
                    </div>
                </div>                          
            </nav>                                  
        </React.Fragment>
    )
}

export default Navbar
