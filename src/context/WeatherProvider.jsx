import { useState, createContext } from 'react'
import axios from 'axios'

const WeatherContext = createContext()

const WeatherProvider = ({children}) => {

  const [search, setSearch] = useState({
    city: '',
    country: ''
  })

  const [weatherResult, setWeatherResult] = useState({})
  const [loading, setLoading] = useState(false)
  const [noResults, setNoResults] = useState()

  const searchData = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    })
  }

  const getWeather = async weatherData => {
    setLoading(true)
    setNoResults(false)
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
      setNoResults('There is no weather info for that City and Country!')
    }finally {
      setLoading(false)
    }  
  }

  return (
    <WeatherContext.Provider
      value={{
        search,
        searchData,
        getWeather,
        weatherResult,
        loading,
        noResults
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