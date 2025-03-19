import { MongoClient, ServerApiVersion } from 'mongodb'
const url = process.env.NEXT_DB_URL as string;
const options = { 
  serverApi: {
  version: ServerApiVersion.v1,
  strict: true,
  deprecationErrors: true,
} }

let connectDB: Promise<MongoClient>

declare global {
  var _mongo: Promise<MongoClient>
} 

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = globalThis._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }