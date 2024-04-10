import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    if (persons.findIndex((person) => person.name === newName) > -1) {
      alert(`${newName} is already in the list`)
      return
    }

    const phonebook = [...persons, { name: newName, phone: newNumber }]

    setPersons(phonebook)
    setNewNumber('')
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitHandler}>
        <div>
          <b>name:</b> <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </div>
        <div>
          <b>phone:</b> <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.name}>
            {person.name}: <a href={`tel:${person.number}`}>{person.number}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
