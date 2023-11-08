import React, {useState} from 'react';
import axios from 'axios';

export default function Weather (){
    const [city, setCity] = useState(" ");
    const [result, setResult] = useState (" ");
  

function updateCity(event){
        setCity(event.target.value)
}

function handleResponse(response){
    setResult(`the weather is ${Math.round(response.data.temperature.current)} in ${response.data.city}`)
}


function handleSubmit (event){
    event.preventDefault();
    let apiKey = "ee030ced13bec32faetaa24oa4e6af48";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
   
    setCity (" ");
  }

  
  return (
    <div className="form">
    <form onSubmit={handleSubmit}>
      <input type="search" onChange ={updateCity}></input>
      <input type="submit"></input>
      </form>
      <p>{result}</p></div>
  );
}