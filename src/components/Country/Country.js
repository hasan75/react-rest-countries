import React from 'react';

const Country = (props) => {
    return (
        <div>
            <h4>Name: {props.name}</h4>
            <h5>Capital: {props.capital}</h5>
            <h5>Population: {props.population}</h5>
        </div>
    );
};

export default Country;