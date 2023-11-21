import React, {useState} from 'react';
import axios from 'axios';
import "./Weather.css";


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
    <div className="Weather">
    <form onSubmit={handleSubmit}>
    <div class="row">
    <div class="col-9">
      <input 
      type="search" 
      placeholder="Enter a city.." onChange ={updateCity} 
      className="form-control"
      autoFocus="on"></input>
      </div>
      <div class="col-3">
      <input type="submit" class="btn btn-primary w-100"></input>
      </div></div>
      </form>
      <p>{result}</p>
      <div>
        <h1>Madrid</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Sunny</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
          
        
              <img src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png" 
            alt="Cloudy"
            className="float-left"/>
            
              <span className="temperature">18</span>
              <span className="unit">ºC</span> 
           
            </div>
           
          
          <div className="col-6">
            <ul><li>Precipitation: 10%</li>
            <li>Humidity: 73%</li>
            <li>Wind: 5km/h</li></ul>
          </div>
        </div>
        </div></div>
  );
}