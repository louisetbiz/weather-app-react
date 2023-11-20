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
    <div class="row">
    <div class="col-9">
      <input type="search" onChange ={updateCity} class="mb-3 w-100"></input>
      </div>
      <div class="col-3">
      <input type="submit" class="btn btn-primary w-100"></input>
      </div></div>
      </form>
      <p>{result}</p></div>
  );
}