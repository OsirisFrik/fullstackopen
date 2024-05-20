import { Router } from 'express'

import { getPersonById, getPersons } from '../models/PhoneBook.js'

const router = Router()

router.get('/api/persons', async (req, res) => {
  try {
    const persons = await getPersons()

    return res.json(persons)
  } catch (err) {
    console.trace(err)

    res.status(500).send()
  }
})

router.get('/api/persons/:id', async (req, res) => {
  try {
    const id = req.params.id

    if (!id) {
      return res.status(400).send('invalid param id')
    }

    const person = await getPersonById(id)

    if (!person) return res.status(404).send()

    return res.json(person)
  } catch (err) {
    console.trace(err)

    res.status(500).send()
  }
})

router.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find((p) => p.id === id)

  if (person) {
    persons.splice(persons.indexOf(person), 1)

    return res.status(204).end()
  }

  return res.status(404).end()
})

router.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body || !body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  }

  const person = persons.find((p) => p.name === body.name)

  if (person) {
    return res.status(400).json({
      error: 'this person already exists'
    })
  }

  const newPerson = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * 10000000000)
  }

  persons.push(newPerson)

  return res.json(newPerson)
})

export default router
