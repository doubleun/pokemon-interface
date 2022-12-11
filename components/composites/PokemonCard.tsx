import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React from 'react'
import PokemonName from '../base/PokemonName'
import PokemonDetails from './PokemonDetails'
import { PokemonInterface } from '../../types'
import PokemonFoother from '../base/PokemonFooter'

const PokemonCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border: 3px solid black;
  border-radius: 1rem;
`

const PokemonCard = ({ pokemon }: { pokemon: PokemonInterface }) => {
  return (
    <PokemonCardContainer>
      <PokemonName
        number={pokemon.number}
        name={pokemon.name}
        types={pokemon.types}
      />
      <PokemonDetails pokemon={pokemon} />
      <PokemonFoother pokemon={pokemon} />
    </PokemonCardContainer>
  )
}

export default PokemonCard
