import React, { useEffect, useState } from 'react';

const Weather= () => {
    const [searchInput, setSearchInput] = useState("");
    const [location, setLocation] = useState("indore");
    const [weather, setWeather] = useState([]);
    const [astronomy, setAstronomy] = useState([]);


    useEffect(()=>{
        getRealTimeWeatherInfo()
        getSportsInfo()
    },[location])
    
    async function getRealTimeWeatherInfo() {
        const data= await fetch("http://api.weatherapi.com/v1/current.json?key=976a9e6f12bf436597f125218232101&q="+location+"&aqi=yes")
        const json = await data.json();
        // console.log(json)
        setWeather(json)
    }
    async function getSportsInfo(){
        const data = await fetch("http://api.weatherapi.com/v1/astronomy.json?key=976a9e6f12bf436597f125218232101&q="+location+"&aqi=yes");
        const json = await data.json();
        console.log(json)
        setAstronomy(json.astronomy);
    }
//48.8567,2.3508
    
    return weather.length===0 && astronomy.length===0? <h1>Loading</h1>:(
        <>
            <div className="search-area">
            <input type="text" placeholder="enter location" id="search-area-weather" value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} />
            <button id="search-btn-weather" onClick={()=>{
               if(searchInput==""  ||  typeof searchInput!=="string"){
                alert("enter valid location")
               }else{
                setLocation(searchInput);
               }
               
            }}>Search</button>
            </div>
            <div className="weather-info"><h1>{weather?.location?.name}</h1>
                <h3>{weather?.location?.localtime}</h3>
                <img src={weather?.current?.condition?.icon}></img>
                <h3>{weather?.current?.condition?.text}</h3>
                <h3>Temperature: {weather?.current?.temp_c} °c</h3>
                <h3>Real Feel: {weather?.current?.feelslike_c}°c</h3>
                <h3>Wind: {weather?.current?.gust_kph} km/h</h3>
                <h3>Humidity: <div>{weather?.current?.humidity}</div></h3>
                <div><h3>Sunrise: {astronomy?.astro?.sunrise} Sunset:{astronomy?.astro?.sunset}</h3></div>

            </div>
        </>
    )
}

export default Weather

// 976a9e6f12bf436597f125218232101