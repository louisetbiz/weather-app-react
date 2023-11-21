import React from "react";
import "./App.css";
import Weather from "./Weather.js";

export default function App (){
    return (
        <div className ="App">
            <div className="container">
                

        
                <Weather/>
                <footer>This project was coded by Louise Biz and is <a href="https://github.com/louisetbiz/weather-app-react" > open-sourced on GitHub</a> and hosted on Netlify</footer>
            </div>
        </div>
    )
}