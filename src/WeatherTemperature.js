import React, {useState} from "react";

export default function WeatherTemperature (props){
    const [unit, setUnit] = useState ("celcius");

    function convertToFahrenheit (event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }

    function fahrenheit(){
        return (props.celcius *9)/5 + 32;
    }

    if (unit === "celcius"){
   return (
    <div className="weatherTemperature">
    <span className="temperature">
        {Math.round(props.celcius)}
    </span>
    <span className="unit">ºC | <a href="/" onClick={convertToFahrenheit}>ºF</a>
    </span> 
    </div>
   );

    } else {
        
        return(
            <div className="weatherTemperature">
            <span className="temperature">
                {Math.round(fahrenheit())}
            </span>
            <span className="unit"><a href="/" onClick={convertToCelcius}>ºC</a> | ºF
            </span> 
            </div>
           );
    }
   
}