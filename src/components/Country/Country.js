import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name, capital, population, flag, region} = props.country;
    console.log(props.country)
    return (
        <div className="country">
            <h4>Name: {name}</h4>
            <h5>Capital: {capital}</h5>
            <h5>Population: {population}</h5>
            <p>Region: {region}</p>
            <img src={flag}></img>
        </div>
    );
};

export default Country;