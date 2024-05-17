import { useEffect, useState } from 'react'
import { getWeather } from '../libs/weather'

export function Weather({ country }) {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    getWeather({
      lat: country.latlng[0],
      lon: country.latlng[1]
    }).then((data) => {
      console.log(data)
      setWeather(data)
    })
  }, [country])

  return (
    <>
      <div>
        <h2>Weather in {country.name.common}</h2>
        <p>
          <b>temperature: </b>
          {weather?.main.temp} Celsius
        </p>
        <img
          src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`}
          alt='weather icon'
        />
        <p>
          <b>wind: </b>
          {weather?.wind.speed} mph direction {weather?.wind.deg} degrees
        </p>
      </div>
    </>
  )
}
