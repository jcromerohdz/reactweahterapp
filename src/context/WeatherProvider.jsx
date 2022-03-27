import { useState, createContext } from 'react'
import axios from 'axios'

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

  console.log(import.meta.env.VITE_API_KEY)

  const [search, setSearch] = useState({
    city: '',
    country: ''
  })

  const [weatherResult, setWeatherResult] = useState({})

  const searchData = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const getWeather = async weatherData => {
    try {
      const { city, country } = weatherData

      const appId = import.meta.env.VITE_API_KEY

      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${country}&limit=1&appid=${appId}`

      const { data } = await axios(url)
      const { lat, lon } = data[0]
      const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

      const { data: weather } = await axios(weatherURL)
      setWeatherResult(weather)
      
    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <WeatherContext.Provider
      value={{
        search,
        searchData,
        getWeather,
        weatherResult
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export {
  WeatherProvider
}

export default WeatherContext