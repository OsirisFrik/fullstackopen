import { useState } from 'react'

export function ContactForm({ onSubmit = () => false }) {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()

    onSubmit({ name: newName, number: newNumber })
    setNewName('')
    setNewNumber('')
  }
  
  return (
    <div>
      <h3>Add new contact</h3>
      <form onSubmit={submitHandler}>
        <div>
          <label>
          Name:
          <input value={newName} onChange={(e) => setNewName(e.target.value)} />
        </label>
        </div>
        <div>
          <label>
          Number:
          <input value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
        </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
