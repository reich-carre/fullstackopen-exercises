import {useState, useEffect} from "react"
import axios from "axios"
import wmoCode from "../services/weatherIcon"

const Weather = ({searchedCountry})=>{
  //console.log(searchedCountry[11])
  const [weather, setWeather] = useState("")


  useEffect(()=>{
      if(searchedCountry.length === 1){
        const latlng = searchedCountry.map(country =>country.latlng)
       // setLatlong(latlng[0])
       
        const [lat, long] = latlng[0]
            console.log(`effect, lat = ${lat}, long = ${long}`)
              axios
                .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&models=icon_seamless&current=temperature_2m,wind_speed_10m,weather_code&forecast_days=1&wind_speed_unit=ms`)
                .then(response =>{
                  console.log(response.data.current)
                  const data = response.data.current
                  setWeather(data)
                })
      }
      else{
        console.log("no data yet")
      }
      console.log(searchedCountry.length === 1)
  },[searchedCountry.length === 1])

  
  if(searchedCountry.length === 1 && weather){
    const icon =`wi ${wmoCode[weather.weather_code].day}`
  return(
    <div className="content weather">
      {searchedCountry.map(country =>
         <div key={country.cca2}>
          <h2>Weather in {country.capital[0]}</h2>
            <p>Temperature {weather.temperature_2m} °C</p>
          
               <i className={icon}></i>
                
             <p> {wmoCode[weather.weather_code].dayLabel}</p>
            <p>Wind {weather.wind_speed_10m} m/s</p>
          </div>
      )}
  </div>
  )
  }
}




export default Weather