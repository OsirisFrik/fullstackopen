import mongoose from 'mongoose'
import { MONGO_USER } from './config.js'
import { PhoneBook } from './models/PhoneBook.js'

try {
  const [password, name, phone] = process.argv.slice(2)

  if (!password) throw 'PASSWORD HAS REQUIRED'

  const MONGO_URI = process.env.MONGO_URI.replace(
    '<username>',
    MONGO_USER
  ).replace('<password>', password)

  console.log('args:', password, name, phone)

  const client = await mongoose.connect(MONGO_URI)

  console.log('mongoose client connected')

  if (name && phone) {
    const person = new PhoneBook({
      name,
      phone
    })

    await person.save()

    console.log(`Added ${name} number ${phone} to PhoneBook`)
  } else {
    const persons = await PhoneBook.find()

    console.group('PhoneBook')

    for (const person of persons) {
      console.log(`${person.name}: ${person.phone}`)
    }

    console.groupEnd()
  }

  await client.connection.close()
  console.log('mongoose client disconnected')
} catch (err) {
  console.trace(err)
}
