import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React, { Dispatch, SetStateAction, useContext } from 'react'
import { PokemonInterface } from '../../types'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { handleSearchPokemon } from '../../utils/search'
import AppContext from '../AppContext'

const PokemonEvolutionCardContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const PokemonImageContainer = styled(Box)`
  width: auto;
  max-width: 100%;
`

const handleSearchEvolution = async (
  name: string,
  setPokemonList: Dispatch<SetStateAction<PokemonInterface[]>>
) => {
  const pokemonList = await handleSearchPokemon(name)
  if (Array.isArray(pokemonList)) setPokemonList(pokemonList)
}

const PokemonEvolutionCard = ({
  evolution,
}: {
  evolution: PokemonInterface
}) => {
  const context = useContext(AppContext)

  return (
    <PokemonEvolutionCardContainer
      onClick={() =>
        handleSearchEvolution(evolution.name, context.setPokemonList)
      }
    >
      <PokemonImageContainer>
        <Image
          src={evolution.image}
          alt="Pokemon image"
          width={0}
          height={0}
          sizes="100%"
          style={{ width: '100%', height: 'auto' }}
        />
      </PokemonImageContainer>
      <Typography>{evolution.name}</Typography>
    </PokemonEvolutionCardContainer>
  )
}

export default PokemonEvolutionCard
