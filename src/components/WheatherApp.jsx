import React from 'react'
import Form from './Form'
import ResultWeather from './ResultWeather'
import Spinner from './Spinner'
import useWeather from '../hooks/useWeather'

const WheatherApp = () => {

  const { weatherResult, loading, noResults } = useWeather()
  console.log(noResults)

  return (
    <>
      <main className='dos-columnas'>
        <Form />
        { loading ? <Spinner /> :
          weatherResult?.name ? <ResultWeather /> : 
          noResults ? <p>{noResults}</p> :
          <p>The weather shows here!</p>}
      </main>
    </>
  )
}

export default WheatherApp