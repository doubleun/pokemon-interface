import React, { Dispatch, SetStateAction, useContext, useState } from 'react'
import { Box, Button } from '@mui/material'
import SearchInput from '../base/SearchInput'
import styled from '@emotion/styled'
import { handleSearchPokemon } from '../../utils/search'
import AppContext from '../AppContext'
import { PokemonInterface } from '../../types'

const SearchBarContainer = styled(Box)`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export const handleOnSearchEnter = async (
  e: React.KeyboardEvent<HTMLInputElement>,
  value: string,
  setPokemonList: Dispatch<SetStateAction<PokemonInterface[]>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  const key = e.key
  if (key?.toLowerCase() === 'enter') {
    setPokemonList([])
    setIsLoading(true)

    const pokemonList = await handleSearchPokemon(value)
    if (Array.isArray(pokemonList)) setPokemonList(pokemonList)
    setIsLoading(false)
  }
}

const handleSearchButtonPressed = async (
  value: string,
  setPokemonList: Dispatch<SetStateAction<PokemonInterface[]>>,
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  setPokemonList([])
  setIsLoading(true)

  const pokemonList = await handleSearchPokemon(value)
  if (Array.isArray(pokemonList)) setPokemonList(pokemonList)

  setIsLoading(false)
}

const SearchBar = () => {
  const context = useContext(AppContext)

  return (
    <SearchBarContainer>
      <SearchInput
        value={context.searchValue}
        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
          handleOnSearchEnter(
            e,
            context.searchValue,
            context.setPokemonList,
            context.setIsLoading
          )
        }
        onValueChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          context.setSearchValue(e.target.value)
        }
      />
      <Button
        variant="outlined"
        onClick={() =>
          handleSearchButtonPressed(
            context.searchValue,
            context.setPokemonList,
            context.setIsLoading
          )
        }
      >
        Search
      </Button>
    </SearchBarContainer>
  )
}

export default SearchBar
