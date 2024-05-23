import { Router } from 'express'

import {
  createPerson,
  deletePerson,
  existsPerson,
  getPersonById,
  getPersons,
  updatePerson
} from '../models/PhoneBook.js'
import { isValidObjectId } from 'mongoose'

const router = Router()

router.use('/api/persons/:id', async (req, res, next) => {
  const id = req.params.id

  if (!id || !isValidObjectId(id)) {
    return res.status(400).send('invalid id')
  }

  console.log(`md - id = ${id}`)

  const exists = await existsPerson(id)

  if (!exists) return res.status(404).send()

  return next()
})

router.get('/api/persons', async (req, res) => {
  try {
    const persons = await getPersons()

    return res.json(persons)
  } catch (err) {
    console.trace(err)

    res.status(500).send({
      message: err.message
    })
  }
})

router.get('/api/persons/:id', async (req, res) => {
  try {
    const id = req.params.id
    const person = await getPersonById(id)

    if (!person) return res.status(404).send('person not found')

    return res.json(person)
  } catch (err) {
    console.trace(err)

    res.status(500).send({
      message: err.message
    })
  }
})

router.delete('/api/persons/:id', async (req, res) => {
  try {
    const id = req.params.id

    await deletePerson(id)

    return res.status(200).send()
  } catch (err) {
    console.trace(err)

    res.status(500).send({
      message: err.message
    })
  }
})

router.post('/api/persons', async (req, res) => {
  try {
    const body = req.body

    // if (!body || !body.name || !body.number) {
    //   return res.status(400).json({
    //     error: 'name or number missing'
    //   })
    // }

    const person = await createPerson(body)

    return res.json(person)
  } catch (err) {
    console.trace(err)

    res.status(500).send({
      message: err.message
    })
  }
})

router.put('/api/persons/:id', async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body

    if (!body || !body.name || !body.number) {
      return res.status(400).json({
        error: 'name or number missing'
      })
    }

    const person = await updatePerson(id, body)

    if (!person) return res.status(404).send('person not found')

    return res.json(person)
  } catch (err) {
    console.trace(err)

    res.status(500).send({
      message: err.message
    })
  }
})

export default router
