import axios from 'axios'

// axios config
const headers = {
  'Content-Type': 'application/json',
}

const fetchPokemon = axios.create({
  // TODO: Use env variable instead
  baseURL: 'https://graphql-pokemon2.vercel.app',
  // TODO: use env variable instead
  timeout: 5000,
  headers: headers,
})

export default fetchPokemon
