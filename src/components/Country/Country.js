import React from 'react';
import './Country.css'

const Country = (props) => {
 const {name, capital, population, region, flag} = props.country;
    
    return (
        <div className="country">
            <h4>Name:{name}</h4>
            <h5>Capital:{capital}</h5>
            <h6>Population:{population}</h6>
            <p>Region:{region}</p>
            <img src={flag}></img>
        </div>
    );
};

export default Country;