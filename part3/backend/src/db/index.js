import fs from 'node:fs'
import { fileURLToPath } from 'node:url'

const resolve = (path) => {
  return fileURLToPath(new URL(path, import.meta.url))
}

export const { persons } = JSON.parse(
  fs.readFileSync(resolve('./persons.json'), 'utf8')
)
