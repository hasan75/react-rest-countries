import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Country from '../Country/Country';

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
            {
                countries.map(country => console.log(country))
            }
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;