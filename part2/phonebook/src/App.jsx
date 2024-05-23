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
import { Toast } from './components/Toast'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filteredContacts, setFilteredContacts] = useState([])
  const [messages, setMessages] = useState([])

  useEffect(() => {
    loadPersons()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setFilteredContacts([...persons])
  }, [persons])

  const loadPersons = async () => {
    const data = await getPersons()

    setPersons(data)
  }

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
        try {
          person = await updatePerson({
            ...person,
            number
          })
          setMessages([
            ...messages,
            { type: 'success', message: `${person.name} has been updated` }
          ])
          loadPersons()

          return
        } catch (err) {
          setMessages([...messages, err])

          return
        }
      }
    }

    try {
      const person = await addPerson({
        name,
        number
      })

      setPersons([...persons, person])
      setMessages([
        ...messages,
        { type: 'success', message: `${person.name} has been added` }
      ])
    } catch (err) {
      console.log(err)
      setMessages([...messages, err])
    }
  }

  const deleteHandler = async (id) => {
    try {
      const item = persons.find((contact) => contact._id === id)

      console.log(id)

      if (window.confirm(`Delete ${item.name}?`)) {
        await deletePerson(id)
        setMessages([
          ...messages,
          { type: 'error', message: `${item.name} has been deleted` }
        ])
        loadPersons()
      }
    } catch (err) {
      console.log(err)
      setMessages([...messages, err])
    }
  }

  const onCloseToast = (index) => {
    setMessages(messages.filter((message, i) => i !== index))
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Toast messages={messages} onClose={onCloseToast} />
      <ContactForm onSubmit={submitHandler} />
      <h2>Contacts</h2>
      <Filter contacts={persons} onChange={setFilteredContacts} />
      <Contacts contacts={filteredContacts} deleteHandler={deleteHandler} />
    </div>
  )
}

export default App
