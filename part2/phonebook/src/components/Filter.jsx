import { useEffect, useState } from 'react'

export function Filter({ contacts, onChange = () => false }) {
  const [filter, setFilter] = useState('')
  const [filtered, setFiltered] = useState([...contacts])

  useEffect(() => {
    if (filter.length > 0) {
      const rx = new RegExp(filter, 'i')

      setFiltered(contacts.filter(({ name }) => rx.test(name)))
    } else {
      setFiltered([...contacts])
    }

    onChange(filtered)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, contacts])

  
  return (
    <div>
      <label>
        Find contacts by name:
        <input
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </label>
    </div>
  )
}
