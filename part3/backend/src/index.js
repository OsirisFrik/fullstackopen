import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

import PersonsCtrl from './controllers/persons.js'
import { STATIC_DIR } from './config.js'

const app = express()

morgan.token('body', (req) =>
  req.method === 'POST' ? JSON.stringify(req.body) : ''
)

app
  .use(express.json())
  .use(cors())
  .use(express.static(STATIC_DIR))
  .use(
    morgan((tokens, req, res) => {
      return [
        tokens.method(req, res),
        tokens.url(req, res),
        tokens.status(req, res),
        tokens.res(req, res, 'content-length'),
        tokens['response-time'](req, res),
        'ms',
        req.method === 'POST' ? JSON.stringify(req.body) : ''
      ]
        .join(' ')
        .trim()
    })
  )
  .use(PersonsCtrl)

app.get('/info', (req, res) => {
  const date = new Date()
  const body = `
  <p>Phonebook has info for ${persons.length} people</p>
  <br/>
  <p>${date.toString()}</p>
  `

  return res.write(body)
})

app.listen(3000, () => console.log('Server running on port 3000'))
