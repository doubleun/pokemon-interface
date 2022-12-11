import '../styles/globals.css'
import type { AppProps } from 'next/app'
import AppContext from '../components/AppContext'
import { useState } from 'react'
import { PokemonInterface } from '../types'

export default function App({ Component, pageProps }: AppProps) {
  const [searchValue, setSearchValue] = useState('')
  const [pokemonList, setPokemonList] = useState<PokemonInterface[]>([])

  return (
    <AppContext.Provider
      value={{ searchValue, setSearchValue, pokemonList, setPokemonList }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
