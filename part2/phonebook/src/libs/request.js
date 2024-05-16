import axios from 'axios'

export const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export async function getPersons() {
  const response = await request({
    url: '/persons',
    method: 'GET'
  })

  return response.data
}


export async function addPerson(person) {
  const response = await request({
    url: '/persons',
    method: 'POST',
    data: person
  })

  return response.data
}
