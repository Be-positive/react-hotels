import React, {useState, useRef} from 'react'
import './Hotels.scss'
/* import Navbar from '../Navbar' */
import Footer from '../Footer'

const Hotels = () => {
/*     const classHotel = () => {
        
    } */
    const handleSubmit = (e) => {
        e.preventDefault()        
    }

    /* const bookRoom = (e) => {
        e.preventDefault()
        const formShow = document.getElementById('finishBook')
        formShow.style.display = 'flex'       
    } */  
    
    const[drop, setDrop] = useState(false)

    const clickDrop = () => {
        if(drop === false){
            setDrop(true)
            const form1 = document.getElementById('searchForm')
            form1.style.position = 'relative'
            form1.style.visibility = 'visible'
            form1.style.opacity = '1'
            form1.style.zIndex = '1'
            form1.style.transform = 'translateY(0)'
            form1.style.transitionDelay = '0s, 0s, 0.3s'                            
        } else {
            setDrop(false)
            const form2 = document.getElementById('searchForm')
            form2.style.position = 'absolute'
            form2.style.visibility = 'hidden'
            form2.style.opacity = '0'
            form2.style.zIndex = '-1'
            form2.style.transform = 'translateY(-3em)'
            form2.style.transition = 'all 0.3s ease 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s';
        }
    }
        
    const refCountry = useRef('Singapore')
    const refClassHotell = useRef('Luxory')
    const refCheckIn = useRef('19.07.2021')
    const refCheckOut = useRef('20.07.2021')
    const refAdults = useRef('1');
    const refChild = useRef('0');
    const refRooms = useRef('1');
    
    /* console.log(refChild) */

    /* const[persons, setPerson] = useState(1) */
    const searchBtn = () => {
        const persons = document.getElementById('personQuantity')        
        persons.innerHTML = parseInt(refAdults.current.value) + parseInt(refChild.current.value)
        const checkIn = document.getElementById('checkingIn')       
        checkIn.innerHTML = refCheckIn.current.value 
        const checkOut = document.getElementById('checkingOut')        
        checkOut.innerHTML = refCheckOut.current.value
        const roomQuantity = document.getElementById('roomsQuant')        
        roomQuantity.innerHTML = refRooms.current.value
        const classHotel = document.getElementById('classHotel')        
        classHotel.innerHTML = refClassHotell.current.value
        const setCountries = document.getElementById('setCountries')        
        setCountries.innerHTML = refCountry.current.value
        clickDrop()        
    }

    const bookRoom = () => {                      
        const formShow = document.getElementById('finishBook')
        formShow.style.display = 'flex'
        /* formShow.style.transform = 'translate3d(0vh, 0, 0)' */
        formShow.style.marginTop = '9.5vh'
        const setCountries = document.getElementById('setCountries1')        
        setCountries.innerHTML = refCountry.current.value
        const classHotel = document.getElementById('classHotel1')        
        classHotel.innerHTML = refClassHotell.current.value
        const checkIn = document.getElementById('checkingIn1')       
        checkIn.innerHTML = refCheckIn.current.value 
        const checkOut = document.getElementById('checkingOut1')        
        checkOut.innerHTML = refCheckOut.current.value
        const persons = document.getElementById('personQuantity1')        
        persons.innerHTML = parseInt(refAdults.current.value) + parseInt(refChild.current.value)         
        const roomQuantity = document.getElementById('roomsQuant1')        
        roomQuantity.innerHTML = refRooms.current.value
        
        const priceRoom = document.getElementById('priceRoom')
        if(classHotel.innerHTML === 'Presidential') {
            priceRoom.innerText = 2000;
        } else if (classHotel.innerHTML === 'Royal') {
            priceRoom.innerText = 1800;
        } else if (classHotel.innerHTML === 'Executive') {
            priceRoom.innerText = 1500;
        } else {
            priceRoom.innerText = 1300;
        }
    }



    const bookRoom1 = (e) => {        
        e.stopPropagation()  
        const hotel1 = document.getElementById('hotel1')        
        const hotelInfo = document.getElementById('hotelInfo')
        hotelInfo.innerText = hotel1.innerText
        bookRoom()
        const price1 = document.getElementById('price1')
        const priceRoom = document.getElementById('priceRoom')        
        priceRoom.innerText = parseInt(priceRoom.innerText) + parseInt(price1.innerText)                 
        
             
    }
    const bookRoom2 = (e) => {        
        e.stopPropagation()  
        const hotel2 = document.getElementById('hotel2')        
        const hotelInfo = document.getElementById('hotelInfo')
        hotelInfo.innerText = hotel2.innerText
        bookRoom() 
        const price2 = document.getElementById('price2')
        const priceRoom = document.getElementById('priceRoom')
        priceRoom.innerText = parseInt(priceRoom.innerText) + parseInt(price2.innerText)        
              
    }
    const bookRoom3 = (e) => {        
        e.stopPropagation()  
        const hotel3 = document.getElementById('hotel3')        
        const hotelInfo = document.getElementById('hotelInfo')
        hotelInfo.innerText = hotel3.innerText
        bookRoom()
        const price3 = document.getElementById('price3')
        const priceRoom = document.getElementById('priceRoom')
        priceRoom.innerText = parseInt(priceRoom.innerText) + parseInt(price3.innerText)
               
    }
    const bookRoom4 = (e) => {        
        e.stopPropagation()  
        const hotel4 = document.getElementById('hotel4')        
        const hotelInfo = document.getElementById('hotelInfo')
        hotelInfo.innerText = hotel4.innerText  
        bookRoom()
        const price4 = document.getElementById('price4')
        const priceRoom = document.getElementById('priceRoom')
        priceRoom.innerText = parseInt(priceRoom.innerText) + parseInt(price4.innerText)      
               
    }
    const bookRoom5 = (e) => {        
        e.stopPropagation()  
        const hotel5 = document.getElementById('hotel5')        
        const hotelInfo = document.getElementById('hotelInfo')
        hotelInfo.innerText = hotel5.innerText
        bookRoom() 
        const price5 = document.getElementById('price5')
        const priceRoom = document.getElementById('priceRoom')
        priceRoom.innerText = parseInt(priceRoom.innerText) + parseInt(price5.innerText)        
              
    }
    const bookRoom6 = (e) => {        
        e.stopPropagation()  
        const hotel6 = document.getElementById('hotel6')        
        const hotelInfo = document.getElementById('hotelInfo')
        hotelInfo.innerText = hotel6.innerText
        bookRoom()
        const price6 = document.getElementById('price6')
        const priceRoom = document.getElementById('priceRoom')
        priceRoom.innerText = parseInt(priceRoom.innerText) + parseInt(price6.innerText)       
               
    }
    
    const bookBtn = (e) => {        
        e.stopPropagation()
        const formShow = document.getElementById('finishBook')        
        /* formShow.style.transform = 'translate3d(200vh, 0, 0)' */
        formShow.style.marginTop = '-200vh'

    }
    
    
    
    /* document.getElementById('todayDate').valueAsDate = new Date().toISOString().substring(0, 10) */
                               
    return (
        <> <section>           
            <h1 className='hotels2'> Book room in the best Southeast Asia Hotels!</h1>
            <img className='singapure' width='1300px' height='500px' src="https://photos.mandarinoriental.com/is/image/MandarinOriental/singapore-overview-hotel-at-a-glance?wid=2880&hei=1280&fmt=jpeg&crop=7,369,1639,728&anchor=826,733&qlt=85,0&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72&fit=wrap" alt="singapure" />
            <div className='selectRoom'>
                <h1>Select a Hotel</h1>                
                <div className='searchDrop'>
                    <ul>
                        <li><span id='setCountries' className='setCountries' >Singapore</span></li>
                        <li>
                            <ul>
                                <li><span id='classHotel'>Junior</span></li>                                
                                <li><span id='checkingIn'>2021.07.19</span> - <span id='checkingOut'>2021.07.20</span> </li>
                                <li> <span id='personQuantity'>1</span> person(s)</li>
                                <li> <span id='roomsQuant'>1</span> Room(s)</li>                                
                            </ul>
                        </li>
                        <li className='changeSearch'>Change Search</li>
                        <li onClick={clickDrop}><i className={drop ? "fas fa-solid fa-chevron-up" : "fas fa-solid fa-chevron-down" }></i></li>
                        
                    </ul>
                    <form id='searchForm' action="#" onSubmit={handleSubmit}>
                            <ul>
                                <li className='check'>
                                    <div className='dates'>
                                        <label htmlFor="date1">Check-in</label>
                                        <input ref={refCheckIn} style={{fontSize:'1.2em'}} id="date1" name="date1" className='date' type="date" defaultValue="2021-07-19" min="2021-07-19" max="2022-12-31"></input>
                                    </div>
                                    <div>
                                        <label htmlFor="date2">Check-out</label>
                                        <input ref={refCheckOut} style={{fontSize:'1.2em'}} id="date2" name="date2" className='date' type="date" defaultValue="2021-07-20" min="2021-07-20" max="2022-12-31"/>
                                    </div>                               
                                </li>
                                
                                <li className='personInRoom'>
                                    <div>
                                    <label htmlFor="adult">Adult(s) </label>
                                    <input ref={refAdults} style={{fontSize:'1.2em'}} type="number"  id="adult" name="adult" min="1" max="30" defaultValue='1'></input>                                        
                                    </div>
                                    <div>
                                    <label htmlFor="child">Child(ren) </label>
                                    <input ref={refChild} style={{fontSize:'1.2em'}} type="number" id="child" name="child" min="0" max="30" defaultValue='0'></input>                                        
                                    </div>
                                    <div>
                                    <label htmlFor="room"> Room(s) </label>
                                    <input ref={refRooms} style={{fontSize:'1.2em'}} type="number" id="room" name="room" min="1" max="30" defaultValue='1'></input>
                                    </div>                                     
                                </li>                             
                                                             
                                <li className='hotelCountry'>
                                    <div>
                                    <label htmlFor='hotel'>Suite type</label>
                                    <select ref={refClassHotell} name="hotel" id="hotel" style={{fontSize:'1.2em'}} >
                                       <option value="Junior">Junior</option>
                                       <option value="Executive">Executive </option>
                                       <option value="Royal">Royal</option>
                                       <option value="Presidential">Presidential</option>
                                    </select>
                                    </div>
                                    <div>
                                    <label htmlFor="country">Country</label>
                                    <select ref={refCountry} name="country" id="country" style={{fontSize:'1.2em'}}>
                                    <option value="Singapore">Singapore</option>                                
                                    <option value="Cambodia">Cambodia</option>
                                    <option value="Indoneisia">Indoneisia</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Myanmar">Myanmar</option>
                                    <option value="Philippines">Philippines</option>
                                    <option value="Brunei">Brunei </option>
                                    <option value="Thailand">Thailand</option>
                                    <option value="Timor">Thimor-Leste</option>
                                    <option value="Vietnam">Viet Nam</option>
                                    </select>
                                    </div>                                    
                                </li>                                                                                    
                                <li>
                                    <button id="searchBtn" onClick={searchBtn}>Search</button>
                                </li>
                            </ul>                   
                                                                                                     
                    </form>
                </div>              
            </div> 

            <div id='roomsList'>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_1300,q_auto,w_2000/itemimages/46/32/46322_v6.jpeg" alt="firstRoom" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3 id='hotel1'>Mandarin Oriental</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>Marina Bay</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM <span id='price1'>556</span>$</h4>
                                <button onClick={bookRoom1}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://www.equatorial.by/sites/default/files/content/st._regis_singapore_deluxe.jpg" alt="firstHotel" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3 id='hotel2'>The ST Regis SIngapore</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>Tanglin Rd</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM <span id='price2'>620</span>$</h4>
                                <button onClick={bookRoom2}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://ru.flowcon.com/fileadmin/user_upload/Pictures/Projects/FlowCon-Project-Marina-Bay-Sands-Singapore.jpg" alt="secondHotel" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3 id='hotel3'>Marina Bay Sands</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>Bayfront Ave</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM <span id='price3'>856</span>$</h4>
                                <button onClick={bookRoom3}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://uniquesingapore.ru/wp-content/uploads/2015/12/The-Fullerton-Hotel.jpg" alt="ThirdHotel" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3 id='hotel4'>The Fullerton Hotel</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>Fullerton Square</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM <span id='price4'>1556</span>$</h4>
                                <button onClick={bookRoom4}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://pix10.agoda.net/hotelImages/5081264/0/8ba18ad04f00a284272e2d3fd1e846b8.jpg?s=1024x768" alt='Fourth hotel'></img>
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3 id='hotel5'>Capella Singapore</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>Collyer Quay</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM <span id='price5'>2556</span>$</h4>
                                <button onClick={bookRoom5}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="http://img.29palms.ru/photo/hotels/singapore/raffles/1/resized/001_Klub_puteshestviy_Pavla_Aksenova_Singapur_Raffles_Hotel_Singapore.jpg" alt="fifthHotel" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3 id='hotel6'>Raffles Singapore</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>Beach Rd</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM <span id='price6'>3162</span>$</h4>
                                <button onClick={bookRoom6}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
            </div>
            <div id='finishBook'>
                <form id='finishBooking' action="#" onSubmit={handleSubmit}>
                    <h1>Let's reserve it.</h1>
                    <div className='hotelCountry'>
                        <h3 id='hotelInfo'>hotelInfo</h3>
                        <h3><span id='setCountries1' >Singapore</span></h3>
                    </div>                    
                    <ul className='otherHotel'>                     
                        <li><span id='classHotel1'>Luxory</span></li>                                
                        <li><span id='checkingIn1'>2021.07.19</span> - <span id='checkingOut1'>2021.07.20</span> </li>
                        <li> <span id='personQuantity1'>1</span> person(s)</li>
                        <li> <span id='roomsQuant1'>1</span> Room(s)</li>                             
                                                                                                                   
                    </ul>
                    <h3 className='totalPrice'>Total Price for stay: <span id='priceRoom'>2000$</span> EUR</h3>
                    
                    <ul>                               
                        <li className='nameEmail'>
                            <div className='fullName'>
                                <div className='firstName'>
                                    <label htmlFor="firstName">First Name </label>
                                    <input id="firstName" name="firstName" type="text"></input>
                                </div>                               
                                <div className='lastName'>
                                    <label htmlFor="lastName"> Last Name </label>
                                    <input id="lastName" name="lastName" type="text"/>
                                </div>
                                <div className='countryRegion'>
                                    <label htmlFor="countryRegion">Country</label>
                                    <input id="countryRegion" name="countryRegion" type="text"/>
                                </div>       
                            </div>
                            <div className='emailCountry'>
                                <div className='email'>
                                    <label htmlFor="email">Email </label>
                                    <input id="email" name="email" type="text"/>
                                </div>
                                <div className='phone'>
                                    <label htmlFor="phone">Phone Number </label>
                                    <input id="phone" name="phone" type="text"/>
                                </div>                               
                            </div>                        
                                                                                                 
                        </li>

                        <li className='paymentInfo'>
                            <div className='payForm'>
                                <div className='payInfo'>
                                    Payment Information
                                </div>
                                <div className='reserveCard'>Reserve with payment card</div>
                                <p>
                                Your room will be held until your arrival on the day of your check-in.
                                </p>
                                <h4 className='allFields'>All fields are required.</h4>
                                <div className='card'>
                                    <label htmlFor="card">Payment Card Number</label>
                                    <input style={{fontSize:'0.9em'}} id="card" name="card" type="text"/>
                                </div>
    
                                <div className='expCard'>
                                    <div className='month'>
                                        <label htmlFor="month" style={{fontSize:'0.8em'}}>Expired</label>
                                        <select name="month" id="month" style={{fontSize:'1em'}}>
                                            <option value="MM">MM</option>                                
                                            <option value="January">January</option>                                
                                            <option value="February">February</option>
                                            <option value="Marth">Marth</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="June">June</option>
                                            <option value="July">July</option>
                                            <option value="August">Thailand</option>
                                            <option value="September">September</option>
                                            <option value="October">October</option>
                                            <option value="November">November</option>
                                        </select>
                                    </div>
                                    <div className='year'>
                                        <label htmlFor="year"></label>
                                        <select name="year" id="year" style={{fontSize:'1em'}}>
                                            <option value="YYYY">YYYY</option>                                
                                            <option value="2021">2021</option>                                
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                            <option value="2025">2025</option>
                                            <option value="2026">2026</option>
                                            <option value="2027">2027</option>
                                            <option value="2028">2028</option>
                                            <option value="2029">2029</option>
                                            <option value="2030">2030</option>                                        
                                        </select>
                                    </div>                                    
                               </div>                           
                               <div className='secCode'>
                                   <label htmlFor="secCode">Security Code (CVV)</label>
                                   <input style={{fontSize:'1em'}} id="secCode" name="secCode" type="text"/>
                               </div>    
                            </div>
                                                                               
                        </li>                            
                                                                                                                                                                                                                                 
                    </ul>
                    <div className='checkBox'>
                        <input type="checkbox" />
                        <label htmlFor="terms">I certify that I have read and accept <span>the Terms of Use</span> and <span>Privacy Statement</span>.</label>
                        
                    </div>

                    <div id='lastButtons'>                                        
                        <button id="finishBtn" onClick={bookBtn}>BOOK RESERVATION</button>
                    </div>                 
                </form>               
                                                    
            </div>
            
            {/* <div>
                <input type="date" value="<?php echo date('Y-m-d'); ?>" />  
            </div> */}
            {/* <div>
                <input type="date" id='todayDate' name='todayDate' />                              
            </div> */}

        </section>

               

        <Footer />
        
        
        </>
    )
}

export default Hotels;
