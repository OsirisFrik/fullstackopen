import axios from 'axios'

export const request = axios.create({
  baseURL: `/api`
})

request.interceptors.response.use(
  (res) => {
    console.log(res)

    if (res.status === 200) return res

    if (res.status === 404) {
      console.log(res)

      return Promise.reject(res)
    }
  },
  (err) => {
    console.group('Request error:')
    console.log(err)
    console.groupEnd()

    if (err.response && err.response.data) {
      return Promise.reject({
        ...err.response.data,
        type: 'error'
      })
    }

    return Promise.reject(err)
  }
)

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

export async function deletePerson(id) {
  const response = await request({
    url: `/persons/${id}`,
    method: 'DELETE'
  })

  return response.data
}

export async function updatePerson(person) {
  const response = await request({
    url: `/persons/${person._id}`,
    method: 'PUT',
    data: person
  })

  return response.data
}
