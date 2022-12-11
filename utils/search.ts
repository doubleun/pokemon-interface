import { PokemonInterface } from '../types'
import fetchPokemon from './axios'

// max results from search all pokemons
const maxPokemonNumber = '151'

const getRequestBody = (searchValue: string) => {
  if (typeof searchValue === 'string' && searchValue !== '') {
    return {
      query: `query pokemon($id: String, $name: String){
        pokemon(id: $id, name: $name){
          id
          number
          name
          attacks{
            fast{
              name
              type
              damage
            }
            special{
              name
              type
              damage
            }
          }
          evolutions{
            id
            number
            name
            attacks{
              fast{
                name
                type
                damage
              }
              special{
                name
                type
                damage
              }
            }
            classification
            types
            resistant
            weaknesses
            fleeRate
            maxCP
            maxHP
            image
          }
          classification
          types
          resistant
          weaknesses
          fleeRate
          maxCP
          maxHP
          image
        }
      }`,
      variables: { name: searchValue ?? '' },
    }
  } else {
    return {
      query: `query pokemons($first: Int!){
      pokemons(first: $first){
        id
        number
        name
        attacks{
          fast{
            name
            type
            damage
          }
          special{
            name
            type
            damage
          }
        }
        evolutions{
          id
          number
          name
          attacks{
            fast{
              name
              type
              damage
            }
            special{
              name
              type
              damage
            }
          }
          classification
          types
          resistant
          weaknesses
          fleeRate
          maxCP
          maxHP
          image
        }
        classification
        types
        resistant
        weaknesses
        fleeRate
        maxCP
        maxHP
        image
      }
    }`,
      // get first 10 pokemons or use `maxPokemonNumber`
      variables: { first: 50 },
    }
  }
}

const handleSearchPokemon = async (
  name: string
): Promise<PokemonInterface[] | undefined> => {
  try {
    const requestBody = getRequestBody(name)
    const response = await fetchPokemon({
      method: 'POST',
      data: requestBody,
    })
    const result = response?.data?.data
    if (Array.isArray(result?.pokemons)) {
      // return case: multiple pokemon
      return result.pokemons
    } else if (result?.pokemon) {
      // return case: 1 pokemon
      return [result.pokemon]
    } else {
      return []
    }
  } catch (e) {
    console.error(e)
  }
}

export { handleSearchPokemon }
