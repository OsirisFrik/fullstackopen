import { useEffect, useState } from 'react'
import { Contacts } from './components/Contacts'
import { ContactForm } from './components/ContactForm'
import { Filter } from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filteredContacts, setFilteredContacts] = useState([])

  useEffect(() => {
    setFilteredContacts([...persons])
  }, [persons])

  const submitHandler = ({ name, number }) => {
    const existsIndex = persons.findIndex((contact) => contact.name === name || contact.number === number)
    if (existsIndex > -1) {
      alert(`${name} or ${number} already exists`)
      return
    }
    
    setPersons([...persons, { name, number, id: persons.length + 1 }])
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={submitHandler} />
      <h2>Contacts</h2>
      <Filter contacts={persons} onChange={setFilteredContacts}/>
      <Contacts contacts={filteredContacts} />
    </div>
  )
}

export default App
