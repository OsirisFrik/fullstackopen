import { useEffect, useState } from 'react'
import { Contacts } from './components/Contacts'
import { ContactForm } from './components/ContactForm'
import { Filter } from './components/Filter'
import { getPersons } from './libs/request'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])

  useEffect(() => {
    getPersons().then((data) => setPersons(data))
  }, [])

  useEffect(() => {
    setFilteredContacts([...persons])
  }, [persons])

  const submitHandler = ({ name, number }) => {
    const existsIndex = persons.findIndex(
      (contact) => contact.name === name || contact.number === number
    )

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
      <Filter contacts={persons} onChange={setFilteredContacts} />
      <Contacts contacts={filteredContacts} />
    </div>
  )
}

export default App
