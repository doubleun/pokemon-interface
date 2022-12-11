import { styled } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { PokemonInterface } from '../../types'
import RenderBar from '../base/RenderBar'

const PokemonDetailsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-block-end: 2px solid black;
  /* border: 2px solid blue; */
`

const PokemonDetailsColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 5px;
  /* border: 2px solid red; */
`

const PokemonImageContainer = styled(Box)`
  width: 26%;
`

const PokemonAttackItems = styled(Typography)<{ isSpecial: boolean }>(
  ({ isSpecial }) => ({
    display: 'flex',
    alignItems: 'center',
    fontSize: '13px',
    '&::before': {
      fontSize: '14px',
      marginInlineStart: '0.4rem',
      content: isSpecial ? '"💥"' : '"⚡️"',
    },
  })
)

const renderAttacks = (attacks: PokemonInterface['attacks']) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography variant="body2" fontWeight="bold">
        ATTACKS
      </Typography>
      {attacks.fast.map((atk, index) => {
        return (
          <PokemonAttackItems
            key={`${index}-${atk.name}`}
            isSpecial={false}
            sx={{ display: 'flex', gap: '0.2rem' }}
          >
            <span style={{ flex: 1 }}>{atk.name}</span>
            <span
              style={{
                fontSize: '12px',
                marginInlineEnd: '0.4rem',
                color: 'red',
                fontWeight: 'bold',
              }}
            >
              {atk.damage} DMG
            </span>
          </PokemonAttackItems>
        )
      })}
      {attacks.special.map((atk, index) => {
        return (
          <PokemonAttackItems
            key={`${index}-${atk.name}`}
            isSpecial={true}
            sx={{ display: 'flex', gap: '0.2rem' }}
          >
            <span style={{ flex: 1 }}>{atk.name}</span>
            <span
              style={{
                fontSize: '12px',
                marginInlineEnd: '0.4rem',
                color: 'red',
                fontWeight: 'bold',
              }}
            >
              {atk.damage} DMG
            </span>
          </PokemonAttackItems>
        )
      })}
    </Box>
  )
}

const PokemonDetails = ({ pokemon }: { pokemon: PokemonInterface }) => {
  return (
    <PokemonDetailsContainer>
      <PokemonDetailsColumn>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            // justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2">MAX HP: {pokemon.maxHP}</Typography>
          <Typography variant="body2">MAX CP: {pokemon.maxCP}</Typography>
        </Box>
        <RenderBar text="FLEE %" value={pokemon.fleeRate * 100} />
        {renderAttacks(pokemon.attacks)}
      </PokemonDetailsColumn>
      <PokemonImageContainer>
        <Image
          src={pokemon.image}
          alt="Pokemon image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: '100%', height: 'auto' }}
        />
      </PokemonImageContainer>
    </PokemonDetailsContainer>
  )
}

export default PokemonDetails
