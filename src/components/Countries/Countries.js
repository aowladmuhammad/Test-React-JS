import React, { useEffect, useState } from 'react';
import Country from './Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
      fetch('https://restcountries.com/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data));
    }, [])
    return (
      <div style={{margin: "63px 0"}}>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)'}}>
          {
            countries.map(country => <Country key={country.name} country={country}></Country>)
          }
        </div>
        


        {/* {
          countries.map(country => <Country image={country.flags.png} nativeName={country.nativeName} name={country.name} capital={country.capital}></Country>)
        } */}

      </div>
    )
};

export default Countries;