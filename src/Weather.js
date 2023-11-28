import React, {useState} from 'react';
import axios from 'axios';
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";



export default function Weather (props){
    
    const [weatherData, setWeatherData] = useState ({ready : false});
    const [city, setCity] = useState (props.defaultCity);
   
    function handleResponse(response){
      console.log(response.data)
      setWeatherData ({
        ready: true,
        city: response.data.name,
        coord: response.data.coord,
        temperature: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        date: new Date (response.data.dt * 1000),
      });
  }

function search (){
  const apiKey = "1266ad07b66517497b1acf79ea5a6a64";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit (event) {
  event.preventDefault();
  search ();

}  

function handleCityChange (event) {
setCity (event.target.value);
}


if (weatherData.ready) {
  return (
    <div className="Weather">
    <form onSubmit ={handleSubmit}> 
    <div className="row">
    <div className="col-9">
      <input 
      type="search" 
      placeholder="Enter a city.."
      className="form-control"
      autoFocus="on"
      onChange = {handleCityChange}>

      </input>
      </div>
      <div className="col-3">
      <input type="submit" className="btn btn-primary w-100"></input>
      </div></div>
      </form>
      <WeatherInfo data = {weatherData}/>
      <WeatherForecast coord = {weatherData.coord}/>
      
      </div>
  );
} else {
  
    search();
    return "Loading...";
  }


}