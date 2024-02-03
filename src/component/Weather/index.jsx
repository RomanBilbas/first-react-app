import { useEffect, useState } from 'react'

function Weather () {
  const [weather, setweather] = useState(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current=temperature_2m,relativehumidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weathercode,cloudcover,pressure_msl,surface_pressure,windspeed_10m,winddirection_10m,windgusts_10m'
    )
      .then(response => response.json())
      .then(data => setweather(data))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {}, [count])

  const dec = () => {
    setCount(count - 1)
  }
  const inc = () => {
    setCount(count + 1)
  }
  return (
    <>
      <div>
        {weather?.current.windspeed_10m} {weather?.current_units.windspeed_10m}
      </div>
      <div>{count}</div>
      <button onClick={dec}>-</button>
      <button onClick={inc}>+</button>
    </>
  )
}

export default Weather
