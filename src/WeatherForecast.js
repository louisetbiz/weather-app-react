import React, { useState, useEffect } from 'react';
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from 'axios';

export default function WeatherForecast (props) {
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect (() =>{
        setLoaded(false);
    }, [props.coord]);
    

    function handleResponse (response){
        setForecast(response.data.daily);
        setLoaded(true);
    }

    if (loaded){
        return (
            <div className='WeatherForecast'>
                <div className='row'>
                    {forecast.map(function( dailyforecast, index){
                        if (index < 5 ){
                            return (
                                <div className='col' key ={index}>
                                <WeatherForecastDay data={dailyforecast}/>
                                </div>
                            )
                        } else {
                            return (null);
                        }
                    })}
                    
                </div>
            </div>
        );
    } else {

    let apiKey = "1266ad07b66517497b1acf79ea5a6a64";
    let latitude= props.coord.lat;
    let longitude= props.coord.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
    }
    
}

