import { createContext, Dispatch, SetStateAction } from 'react'
import { PokemonInterface } from '../types'

const AppContext = createContext<{
  searchValue: string
  setSearchValue: Dispatch<SetStateAction<string>>
  pokemonList: PokemonInterface[]
  setPokemonList: Dispatch<SetStateAction<PokemonInterface[]>>
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}>({
  searchValue: '',
  setSearchValue: () => {},
  pokemonList: [],
  setPokemonList: () => [],
  isLoading: false,
  setIsLoading: () => false,
})

export default AppContext
