import React from 'react';
import './Country.css';

const Country = (props) => {

  const {flags, nativeName, name, capital, population} = props.country;

  return (
    <div className='single-user' style={{width: '300px', margin: '0'}}>
      <div className="country">
        <img src={flags.png} alt={nativeName} width={'72px'} height={'40px'} />
        <div className='countryData'>
          <h5>Name: {name}</h5>
          <h5>Capital: {capital}</h5>
          <h5>Population: {population}</h5>
        </div>
      </div>
      
      


      {/* <img src={props.image.png} alt={props.nativeName} width={'72px'} height={'40px'} />
      <h4>Name: {props.name}</h4>
      <h4>Capital: {props.capital}</h4> */}

    </div>
  );
};

export default Country;