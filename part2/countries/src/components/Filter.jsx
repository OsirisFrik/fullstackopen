import { useEffect, useState } from 'react'

export function Filter({ countries, onChange = () => false }) {
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([...countries])

  useEffect(() => {
    if (filter.length > 0) {
      const rx = new RegExp(filter, 'i')

      setFiltered(
        countries.filter(({ name }) => rx.test(name.common.toLowerCase()))
      )
    } else {
      setFiltered([...countries])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, countries])

  const onRadioChange = (e) => {
    console.log(e)
    onChange(filtered[e])
  }

  return (
    <>
      <div>
        <label>
          Find countries by name:&nbsp;
          <input value={filter} onChange={(e) => setFilter(e.target.value)} />
        </label>
      </div>
      {filtered.length < 10 && (
        <div>
          <ul>
            {filtered.map(({ name, area }, index) => (
              <li key={area}>
                <input
                  type='radio'
                  name='country'
                  id={area}
                  value={index}
                  onChange={() => onRadioChange(index)}
                />
                {name.common}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
