import React, {useState} from 'react';
import axios from 'axios';
import "./Weather.css";


export default function Weather (props){
    
    const [weatherData, setWeatherData] = useState ({ready : false});
    const [result, setResult] = useState (" ");
   
    function handleResponse(response){
      console.log(response.data)
      setWeatherData ({
        ready: true,
        city: response.data.city,
        temperature: Math.round(response.data.temperature.current),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        icon: response.data.condition.icon_url,
        date: "Wednesday",
      });
  }
  
  
if (weatherData.ready) {
  return (
    <div className="Weather">
    <form>
    <div className="row">
    <div className="col-9">
      <input 
      type="search" 
      placeholder="Enter a city.."
      className="form-control"
      autoFocus="on"></input>
      </div>
      <div className="col-3">
      <input type="submit" class="btn btn-primary w-100"></input>
      </div></div>
      </form>
      <p>{result}</p>
      <div>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className='text-capitalize'>{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
          
        
              <img src={weatherData.icon}
            alt="Cloudy"
            className="float-left"/>
            
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit">ºC</span> 
           
            </div>
           
          
          <div className="col-6">
            <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li></ul>
          </div>
        </div>
        </div></div>
  );
} else {
  
    const apiKey = "ee030ced13bec32faetaa24oa4e6af48";
   
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
   
    return "Loading...";
  }


}