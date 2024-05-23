import { model, Schema, Types } from 'mongoose'

const PhoneBookSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Person name has required'],
    unique: [true, 'person already register'],
    validate: {
      validator: (v) => v.length >= 3,
      message: 'Name minimum length is 3'
    }
  },
  number: {
    type: String,
    required: [true, 'Person number has required'],
    validate: {
      validator: (v) => v.length >= 8,
      message: 'minimum phone length is 8'
    }
  }
})

PhoneBookSchema.path('number').validate(
  (v) => /^(?:\d{2,3}-\d+)$/.test(v),
  (props) => `"${props.value}" is not a valid phone`
)

export const PhoneBook = model('PhoneBook', PhoneBookSchema)

export async function getPersons() {
  const persons = await PhoneBook.find()

  return persons
}

export async function getPersonById(id) {
  return await PhoneBook.findById(id)
}

export async function createPerson(data) {
  const person = new PhoneBook(data)

  await person.save()

  return person
}

export async function updatePerson(id, data) {
  const person = await PhoneBook.findByIdAndUpdate(id, { $set: data })

  return person
}

export async function deletePerson(id) {
  return await PhoneBook.findByIdAndDelete(id)
}

export async function existsPerson(id) {
  return await PhoneBook.exists(new Types.ObjectId(id))
}
