import { useState } from 'react'
import WheatherApp from './components/WheatherApp'
import { WeatherProvider } from './context/WeatherProvider'

function App() {

  return (
    <WeatherProvider>
      <header>
        <h1>How is the Weather?</h1>
      </header>
      <WheatherApp />
    </WeatherProvider>
  )
}

export default App
