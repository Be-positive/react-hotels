import React from 'react'
import './Rooms.scss'

const Rooms = () => {
    const classHotel = () => {
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const bookRoom = (e) => {
        e.preventDefault()
        const formShow = document.getElementById('finishBook')
        formShow.style.display = 'flex'

    }
    const bookBtn = (e) => {
        e.preventDefault()
        const formShow = document.getElementById('finishBook')
        formShow.style.display = 'none'

    }
    return (
        <> <section>
           
            <h1 className='hotels2'> Book room in the best Southeast Asia Hotels!</h1>
            <img className='singapure' width='1300px' height='500px' src="https://photos.mandarinoriental.com/is/image/MandarinOriental/singapore-overview-hotel-at-a-glance?wid=2880&hei=1280&fmt=jpeg&crop=7,369,1639,728&anchor=826,733&qlt=85,0&op_sharpen=0&resMode=sharp2&op_usm=0,0,0,0&iccEmbed=0&printRes=72&fit=wrap" alt="singapure" />
            <div className='selectRoom'>
                <h1>Search a Room</h1>
                <h2>{classHotel}</h2>

                <form id='searchForm' action="#" onSubmit={handleSubmit}>
                            <ul>
                                <li className='check'>
                                    <div className='dates'>
                                        <label htmlFor="date1">Check-in</label>
                                        <input style={{fontSize:'1.2em'}} id="date1" name="date1" className='date' type="date" defaultValue="2021-07-19" min="2021-07-19" max="2022-12-31"></input>
                                    </div>
                                    <div>
                                        <label htmlFor="date2">Check-out</label>
                                        <input style={{fontSize:'1.2em'}} id="date2" name="date2" className='date' type="date" defaultValue="2021-07-20" min="2021-07-20" max="2022-12-31"/>
                                    </div>                               
                                </li>
                                
                                <li className='personInRoom'>
                                    <div>
                                    <label htmlFor="adult">Adult(s) </label>
                                    <input style={{fontSize:'1.2em'}} type="number"  id="adult" name="adult" min="1" max="30" placeholder='1'></input>                                        
                                    </div>
                                    <div>
                                    <label htmlFor="child">Child(ren) </label>
                                    <input style={{fontSize:'1.2em'}} type="number" id="child" name="child" min="0" max="30" placeholder='0'></input>                                        
                                    </div>
                                    <div>
                                    <label htmlFor="room"> Room(s) </label>
                                    <input style={{fontSize:'1.2em'}} type="number" id="room" name="room" min="0" max="30" placeholder='1'></input>
                                    </div>                                     
                                </li>                               
                                
                             
                                <li className='hotelCountry'>
                                    <div>
                                    <label htmlFor='hotel'>Hotel</label>
                                    <select name="hotel" id="hotel" style={{fontSize:'1.2em'}} >
                                       <option value="2">Luxury</option>
                                       <option value="boutiqe">Boutique</option>
                                       <option value="holiday">Holiday</option>
                                       <option value="family">Family</option>
                                    </select>
                                    </div>
                                    <div>
                                    <label htmlFor="country">Country</label>
                                    <select name="country" id="country" style={{fontSize:'1.2em'}}>
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
                                    </div>                                    
                                </li>                                                                                    
                                <li>
                                    <button id="searchBtn" /* onClick={bookButton} */>Search</button>
                                </li>
                            </ul>                   
                                                                                                     
                </form>

                
                
            </div> 
            <div id='roomsList'>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://digital.ihg.com/is/image/ihg/intercontinental-paris-6085981635-3x2?wid=991&fit=constrain" alt="firstRoom" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3>Junior Suite</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>For 3 person</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM 556$</h4>
                                <button onClick={bookRoom}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://digital.ihg.com/is/image/ihg/intercontinental-paris-6085981635-3x2?wid=991&fit=constrain" alt="firstRoom" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3>Executive Junior Suite</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>For 3 person</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM 627$</h4>
                                <button onClick={bookRoom}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://digital.ihg.com/is/image/ihg/intercontinental-paris-6085981635-3x2?wid=991&fit=constrain" alt="firstRoom" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3>Prestige Suite</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>For 3 person</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM 856$</h4>
                                <button onClick={bookRoom}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://digital.ihg.com/is/image/ihg/intercontinental-paris-6085981635-3x2?wid=991&fit=constrain" alt="firstRoom" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3>Ambassador Suite</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>For 3 person</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM 1556$</h4>
                                <button onClick={bookRoom}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://digital.ihg.com/is/image/ihg/intercontinental-paris-6085981635-3x2?wid=991&fit=constrain" alt="firstRoom" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3>Royal Suite</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>For 3 person</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM 2556$</h4>
                                <button onClick={bookRoom}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
                <div className='Room'>
                    <ul> 
                        <li className='roomLeft'>
                           <img width='200px' height='135px' src="https://digital.ihg.com/is/image/ihg/intercontinental-paris-6085981635-3x2?wid=991&fit=constrain" alt="firstRoom" />
                        </li>
                        <li className='roomCenter'>
                            <div className='center'>
                                <h3>Presidential Suite</h3>
                                <p>Inspired by the ballet and the opera, our rooms beautifully decorated which bring a resolutely modern style.</p>
                                <h4>For 4 person</h4>
                            </div>
                            <div className='right'>
                                <h4>FROM 3162$</h4>
                                <button onClick={bookRoom}>SELECT ROOM</button>
                            </div>                           
                        </li>
                       
                    </ul>          
                </div>
            </div>
            <div id='finishBook'>
            <form id='finishBooking' action="#" onSubmit={handleSubmit}>
                            <ul>
                                <li className='check'>
                                    <div className='dates'>
                                        <label htmlFor="dateFinish1">Check-in</label>
                                        <input style={{fontSize:'1.2em'}} id="dateFinish1" name="dateFinish1" className='date' type="date" defaultValue="2021-07-19" min="2021-07-19" max="2022-12-31"></input>
                                    </div>
                                    <div>
                                        <label htmlFor="dateFinish2">Check-out</label>
                                        <input style={{fontSize:'1.2em'}} id="dateFinish2" name="dateFinish2" className='date' type="date" defaultValue="2021-07-20" min="2021-07-20" max="2022-12-31"/>
                                    </div>                               
                                </li>
                                <li className='nameEmail'>
                                    <div className='fullName'>
                                        <label htmlFor="fullName">Full name </label>
                                        <input style={{fontSize:'1.2em'}} id="fullName" name="fullName" type="text"></input>
                                    </div>
                                    <div className='email'>
                                        <label htmlFor="email">Email </label>
                                        <input style={{fontSize:'1.2em'}} id="email" name="email"  type="text"/>
                                    </div>                               
                                </li>
                                
                                <li className='personInRoom'>
                                    <div>
                                    <label htmlFor="adult1">Adult(s) </label>
                                    <input style={{fontSize:'1.2em'}} type="number"  id="adult1" name="adult1" min="1" max="30" placeholder='1'></input>                                        
                                    </div>
                                    <div>
                                    <label htmlFor="child1">Child(ren) </label>
                                    <input style={{fontSize:'1.2em'}} type="number" id="child1" name="child1" min="0" max="30" placeholder='0'></input>                                        
                                    </div>
                                    <div>
                                    <label htmlFor="room1"> Room(s) </label>
                                    <input style={{fontSize:'1.2em'}} type="number" id="room1" name="room1" min="0" max="30" placeholder='1'></input>
                                    </div>                                     
                                </li>                               
                                
                             
                                <li className='hotelCountry'>
                                    <div>
                                    <label htmlFor='hotel1'>Hotel</label>
                                    <select name="hotel1" id="hotel1" style={{fontSize:'1.2em'}} >
                                       <option value="2">Luxury</option>
                                       <option value="boutiqe">Boutique</option>
                                       <option value="holiday">Holiday</option>
                                       <option value="family">Family</option>
                                    </select>
                                    </div>
                                    <div>
                                    <label htmlFor="country1">Country</label>
                                    <select name="country1" id="country1" style={{fontSize:'1.2em'}}>
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
                                    </div>                                    
                                </li>                                                                                    
                                <li>
                                    <button id="finishBtn" onClick={bookBtn}>BOOK</button>
                                </li>
                            </ul>                   
                                                                                                     
                </form>
            </div>

        </section>
        
        
        </>
    )
}

export default Rooms
