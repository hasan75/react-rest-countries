import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      
    </div>
  );
}

function Countries (){
  const [countries, setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then( data => setCountries(data))
  },[])

  return(
    <div>
      <h2>Travelling Around The World</h2>
      <h4>Countries Available: {countries.length}</h4>
      <div className="countries">
      {
        countries.map(country => <Country name={country.name} flag={country.flag}></Country>)
      }
      </div>
    </div>
  )
}

function Country(props){
  console.log(props)
  return(
    <div className="country">
      <h3>Country Name: {props.name}</h3>
      <img src={props.flag}alt="country_picture"></img>
    </div>
  )
}

export default App;
