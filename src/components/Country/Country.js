import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className="country">
            <h4>Name: {props.name}</h4>
            <h5>Capital: {props.capital}</h5>
            <h5>Population: {props.population}</h5>
        </div>
    );
};

export default Country;