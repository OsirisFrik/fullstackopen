import { useEffect, useState } from 'react'
import { Contacts } from './components/Contacts'
import { ContactForm } from './components/ContactForm'
import { Filter } from './components/Filter'
import {
  addPerson,
  deletePerson,
  getPersons,
  updatePerson
} from './libs/request'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])

  useEffect(() => {
    getPersons().then((data) => setPersons(data))
  }, [])

  useEffect(() => {
    setFilteredContacts([...persons])
  }, [persons])

  const submitHandler = async ({ name, number }) => {
    const existsIndex = persons.findIndex(
      (contact) => contact.name === name || contact.number === number
    )

    if (existsIndex > -1) {
      let person = persons[existsIndex]

      if (
        window.confirm(
          `${person.name} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        person = await updatePerson({
          ...person,
          number
        })

        setPersons(
          persons.map((contact) =>
            contact.id === person.id ? person : contact
          )
        )
      }

      return
    }

    const person = await addPerson({
      name,
      number,
      id: `${persons.length + 1}`
    })

    setPersons([...persons, person])
  }

  const deleteHandler = async (id) => {
    const item = persons.find((contact) => contact.id === id)

    if (window.confirm(`Delete ${item.name}?`)) {
      await deletePerson(id)
      setPersons(persons.filter((contact) => contact.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <ContactForm onSubmit={submitHandler} />
      <h2>Contacts</h2>
      <Filter contacts={persons} onChange={setFilteredContacts} />
      <Contacts contacts={filteredContacts} deleteHandler={deleteHandler} />
    </div>
  )
}

export default App
