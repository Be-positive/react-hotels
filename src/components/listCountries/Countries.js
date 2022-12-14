// import React, {useEffect, useState} from 'react'
import './Countries.scss';

// const url = "https://restcountries.eu/rest/v2/all"

const useEffectCountries = () => {   

  // const [country, setCountry] = useState([]);

  // const getCountries = async () => {
  //   const response = await fetch(url);
  //   const country = await response.json();
  //   setCountry(country);    
  // };
  // useEffect(() => {
  //   getCountries();
  // }, []);

  const showUp  = () => {                
    let hotels = document.getElementById('hotelList')
    hotels.style.display="flex";
  }  
  const hide  = () => {                       
    let hotels = document.getElementById('hotelList')
    hotels.style.display="none";    
  }   
  
  const hotelsPrice = (e) => {
    e.preventDefault();                    
    let hotels = document.getElementById('hotelList')
    if(hotels.style.display === "none"){
        return showUp()
    } else {
        return hide()
    }
  }
  
   return (

        <>
        <main>
            <h3>Top sustainable hotels in South-Eastern Asia</h3>
            {/* <ul className='countries'>
                {country.map((user) => {
                     const { name, area, flag, subregion} = user;
                     if(subregion === "South-Eastern Asia" && name.length <= 20){                      
                        return (                            
                            <li key={area}>
                            <div>
                                <img src={flag} alt="" width="50px" height="40px" />
                                <h4>{name}</h4>
                                
                            </div>
                            </li>
                        );
                    } return null                    
                })}
            </ul> */}
            <div className="btnHotels">
              <button onClick={hotelsPrice}>Hotels and Prices</button>
            </div>
            <div id="hotelList"  style={{display:'none'}}>
              <ul>
                <li>
                  <h3>Brunei Darussalam</h3>
                  <p> Shinta Mani Wild <span>(2000$)</span></p>
                  <p> Zannier Hotels Phum Baitang <span>($250)</span></p>
                  <p> Song Saa Private Island <span>(900$)</span></p>
                </li>
                <li>
                  <h3>Cambodia</h3>
                  <p> Shinta Mani Wild <span>(2000$)</span></p>
                  <p> Zannier Hotels Phum Baitang <span>($250)</span></p>
                  <p> Song Saa Private Island <span>(900$)</span></p>
                </li>
                <li>
                  <h3>Indonesia</h3>
                  <p> Shinta Mani Wild <span>(2000$)</span></p>
                  <p> Zannier Hotels Phum Baitang <span>($250)</span></p>
                  <p> Song Saa Private Island <span>(900$)</span></p>
                </li>
                <li>
                  <h3>Malaysia</h3>
                  <p> Shinta Mani Wild <span>(2000$)</span></p>
                  <p> Zannier Hotels Phum Baitang <span>($250)</span></p>
                  <p> Song Saa Private Island <span>(900$)</span></p>
                </li>
                <li>
                  <h3>Myanmar</h3>
                  <p> Shinta Mani Wild <span>(2000$)</span></p>
                  <p> Zannier Hotels Phum Baitang <span>($250)</span></p>
                  <p> Song Saa Private Island <span>(900$)</span></p>
                </li>
                <li>
                  <h3>Philippines</h3>
                  <p> Shinta Mani Wild <span>(2000$)</span></p>
                  <p> Zannier Hotels Phum Baitang <span>($250)</span></p>
                  <p> Song Saa Private Island <span>(900$)</span></p>
                </li>
                <li>
                  <h3>Singapore</h3>
                  <p> Shinta Mani Wild <span>(2000$)</span></p>
                  <p> Zannier Hotels Phum Baitang <span>($250)</span></p>
                  <p> Song Saa Private Island <span>(900$)</span></p>
                </li>
                <li>
                  <h3>Thailand</h3>
                  <p> Shinta Mani Wild <span>(2000$)</span></p>
                  <p> Zannier Hotels Phum Baitang <span>($250)</span></p>
                  <p> Song Saa Private Island <span>(900$)</span></p>
                </li>
                <li>
                  <h3>Timor-Leste</h3>
                  <p> Shinta Mani Wild <span>(2000$)</span></p>
                  <p> Zannier Hotels Phum Baitang <span>($250)</span></p>
                  <p> Song Saa Private Island <span>(900$)</span></p>
                </li>
                <li>
                  <h3>Viet Nam</h3>
                  <p> Shinta Mani Wild <span>(2000$)</span></p>
                  <p> Zannier Hotels Phum Baitang <span>($250)</span></p>
                  <p> Song Saa Private Island <span>(900$)</span></p>
                </li>

              </ul>           
              
              <h4>
                 <a target="_blank" rel="noreferrer" href="https://theluxurytravelexpert.com/">The Best hotels by Luxury Travel Expert </a>
              </h4>
            </div>
            
            

        </main>
        
            
        </>
    )
}

export default useEffectCountries
