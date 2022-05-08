import React from 'react';

const Country = (props) => {

  const {flags, nativeName, name, capital} = props.country;

  return (
    <div className='single-user' style={{width: '300px', margin: '0'}}>
      <img src={flags.png} alt={nativeName} width={'72px'} height={'40px'} />
      <h4>Name: {name}</h4>
      <h4>Capital: {capital}</h4>


      {/* <img src={props.image.png} alt={props.nativeName} width={'72px'} height={'40px'} />
      <h4>Name: {props.name}</h4>
      <h4>Capital: {props.capital}</h4> */}

    </div>
  );
};

export default Country;