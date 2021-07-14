import React, {useEffect, useState} from 'react'
import './Countries.scss';

const url = "https://restcountries.eu/rest/v2/all"

const useEffectCountries = () => {

    
/*     const data = [
        { id: 1, name: 'john' },
        { id: 2, name: 'peter' },
        { id: 3, name: 'susan' },
        { id: 4, name: 'anna' },
      ];
    const [people, setPeople] = React.useState(data);

    const removeItem = (id) => {
        let newPeople = people.filter((person) => person.id !== id);
        console.log(people)
        setPeople(newPeople);
    }; */

    const [country, setCountry] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const country = await response.json();
    setCountry(country);
    // console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

    

    return (

        <>
        <main>
            <h2>Top hotels in South-Eastern Asia</h2>
            <ul className='countries'>
                {country.map((user) => {
                     const { name, area, flag, subregion} = user;
                     if(subregion === "South-Eastern Asia" && name.length < 10){
                        return (
                            <li key={area}>
                            <div>
                                <img src={flag} alt="" width="50px" height="40px" />
                                <h4>{name}</h4>
                                
                            </div>
                            </li>
                        );
                    }                     
                })}
            </ul>

        </main>
        
            
        </>
    )
}

export default useEffectCountries
