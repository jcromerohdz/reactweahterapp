import { useState } from 'react'
import useWeather  from "../hooks/useWeather"

const Form = () => {

  const  [alert, setAlert] = useState('')

  const { search, searchData, getWeather } = useWeather()

  const { city, country } = search

  const handleSubmit = (e) => {
    e.preventDefault()

    if(Object.values(search).includes('')) {
      setAlert('All fields are required!!!')
      return
    }
    setAlert('')

    getWeather(search)

  }

  return (
    <div className='contenedor'>

      {alert && <p>{alert}</p>}
      <form
        onSubmit={handleSubmit}
      >
        <div className='campo'>
          <label htmlFor="city">City</label>
          <input 
            type="text" 
            id="city"
            name="city"
            onChange={searchData}
            value={city}
          />
        </div>
        <div className='campo'>
          <label htmlFor="country">Country</label>
          <select 
            name="country" 
            id="country"
            onChange={searchData}
            value={country}
          >

            <option value=""> Select a country </option>
            <option value="US">United States</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">Spain</option>
            <option value="CA">Canada</option>
            <option value="BR">Brasil</option>
            <option value="UK">United Kindom</option>
            <option value="JP">Japan</option>
          </select>
          
        </div>
        <input type="submit" value='How is the weather?'/>
      </form>
    </div>
  )
}

export default Form