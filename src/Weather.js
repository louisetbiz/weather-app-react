import React, {useState} from 'react';
import axios from 'axios';
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";


export default function Weather (props){
    
    const [weatherData, setWeatherData] = useState ({ready : false});
    const [city, setCity] = useState (props.defaultCity);
   
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
        date: new Date (response.data.time*1000),
      });
  }

function search (){
  const apiKey = "ee030ced13bec32faetaa24oa4e6af48";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
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
      <input type="submit" class="btn btn-primary w-100"></input>
      </div></div>
      </form>
      <WeatherInfo data = {weatherData}/>
      
      </div>
  );
} else {
  
    search();
    return "Loading...";
  }


}