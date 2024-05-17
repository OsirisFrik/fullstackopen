import axios from 'axios'

export const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export async function getCountries() {
  const res = await request.get('/all')

  return res.data
}
