import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { PokemonInterface } from '../../types'
import PokemonEvolutionCard from './PokemonEvolutionCard'

const PokemonFooterContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PokemonFooterEvolutions = styled(Box)`
  display: flex;
  gap: 5rem;
  justify-content: center;
  align-items: center;
`

const renderEvolutionCardList = (
  evolutions: PokemonInterface['evolutions']
) => {
  return evolutions?.map((evolution, index) => {
    return (
      <PokemonEvolutionCard
        evolution={evolution}
        key={`${index}-${evolution.name}`}
      />
    )
  })
}

const PokemonFooter = ({ pokemon }: { pokemon: PokemonInterface }) => {
  return (
    <PokemonFooterContainer>
      <Typography variant="h6">Evolutions</Typography>
      <PokemonFooterEvolutions>
        {renderEvolutionCardList(pokemon.evolutions)}
      </PokemonFooterEvolutions>
    </PokemonFooterContainer>
  )
}

export default PokemonFooter
