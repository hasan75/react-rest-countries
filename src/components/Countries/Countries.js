import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Hello From Countries</h1>
        </div>
    );
};

export default Countries;