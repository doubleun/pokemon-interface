import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext from '../components/AppContext'
import { useState } from 'react'
import { PokemonInterface } from '../types'

export default function App({ Component, pageProps }: AppProps) {
  const [searchValue, setSearchValue] = useState('')
  const [pokemonList, setPokemonList] = useState<PokemonInterface[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  return (
    <AppContext.Provider
      value={{
        searchValue,
        setSearchValue,
        pokemonList,
        setPokemonList,
        isLoading,
        setIsLoading,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
