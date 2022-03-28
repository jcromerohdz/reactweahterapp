import React from 'react'
import useWeather from '../hooks/useWeather'

const ResultWeather = () => {

  const {weatherResult} = useWeather()

  const {name, main} = weatherResult

  // Kelvin degrees
  const kelvin = 273.15

  return (
    <div className='contenedor weather'>
      <h2>The weather of {name} is: </h2>
      <p>
        {parseInt(main.temp - kelvin)} <span>&#x2103;</span>
      </p>
      <div className='temp_min_max'>
        <p>
          Min: {parseInt(main.temp_min - kelvin)} <span>&#x2103;</span>
        </p>
        <p>
          Max: {parseInt(main.temp_max - kelvin)} <span>&#x2103;</span>
        </p>
      </div>
    </div>
  )
}

export default ResultWeather