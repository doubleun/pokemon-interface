import { createContext, Dispatch, SetStateAction } from 'react'
import { PokemonInterface } from '../types'

const AppContext = createContext<{
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  pokemonList: PokemonInterface[]
  setPokemonList: Dispatch<SetStateAction<PokemonInterface[]>>
}>({
  searchValue: '',
  setSearchValue: () => {},
  pokemonList: [],
  setPokemonList: () => [],
})

export default AppContext
