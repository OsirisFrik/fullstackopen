import { useEffect, useState } from 'react'
import { Filter } from './components/Filter'
import { getCountries } from './libs/request'
import { Country } from './components/Country'

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data)
      setCountry(data[0])
    })
  }, [])

  const onCountryChange = (country) => {
    console.log(country, 'country')
    setCountry(country)
  }

  return (
    <>
      <Filter countries={countries} onChange={onCountryChange} />
      {country && <Country country={country} />}
    </>
  )
}

export default App
