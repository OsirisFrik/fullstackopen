import fs from 'node:fs'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const resolve = (path) => {
  return fileURLToPath(new URL(path, import.meta.url))
}

export const { persons } = JSON.parse(
  fs.readFileSync(resolve('./persons.json'), 'utf8')
)
