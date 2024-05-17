import axios from 'axios'

export const request = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_API
})

export const getWeather = async (coords) => {
  const res = await request.get('/data/2.5/weather', {
    params: {
      lat: coords.lat,
      lon: coords.lon,
      appid: import.meta.env.VITE_WEATHER_KEY,
      units: 'metric'
    }
  })

  return res.data
}
