import styled from '@emotion/styled'
import { Box } from '@mui/material'
import React, { useContext } from 'react'
import AppContext from '../AppContext'
import PokemonCard from './PokemonCard'

const PokemonListContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const PokemonList = () => {
  const context = useContext(AppContext)

  return (
    <PokemonListContainer>
      {context.pokemonList?.map((pokemon, index) => {
        return (
          <PokemonCard
            key={`${index}-${pokemon.name}`}
            data-test-id={`${index}-${pokemon.name}`}
            pokemon={pokemon}
          />
        )
      })}
    </PokemonListContainer>
  )
}

export default PokemonList
