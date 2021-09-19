import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Country from '../Country/Country';
import './COuntries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Countries Found: {countries.length}</h1>
            <div className="countries-container">
            {
              countries.map(country => <Country 
                key={country.nativeName} 
                country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;