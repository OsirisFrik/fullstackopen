const ENV = process.env

export const STATIC_DIR = ENV.STATIC_DIR || '../public'

export const PORT = ENV.PORT

export const MONGO_USER = ENV.MONGO_USER
export const MONGO_PASSWORD = ENV.MONGO_PASSWORD

console.log(ENV.MONGO_URI)

if (!ENV.MONGO_URI || ENV.MONGO_URI.length < 20) throw 'INVALID MONGO URI'

export const MONGO_URI = ENV.MONGO_URI.replace(
  '<username>',
  MONGO_USER
).replace('<password>', MONGO_PASSWORD)
