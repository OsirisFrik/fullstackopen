import { model, Schema } from 'mongoose'

const PhoneBookSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    default: ''
  }
})

export const PhoneBook = model('PhoneBook', PhoneBookSchema)

export async function getPersons() {
  const persons = await PhoneBook.find()

  return persons
}

export async function getPersonById(id) {
  return await PhoneBook.findById(id)
}
