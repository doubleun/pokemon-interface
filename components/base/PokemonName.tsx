import styled from '@emotion/styled'
import { Chip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { PokemonInterface } from '../../types'

const PokemonNameContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  /* padding-block: 1rem; */
  /* border: 2px solid black; */
`

const NameColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  /* border: 2px solid red; */
`

const TypesColumn = styled(Box)`
  display: flex;
  gap: 10px;
  /* border: 2px solid blue; */
`

type PokemonNameProps = Pick<PokemonInterface, 'number' | 'name' | 'types'>

const PokemonName = ({ number, name, types }: PokemonNameProps) => {
  // const types = ['aasd']
  return (
    <PokemonNameContainer>
      <NameColumn>
        <Typography variant="subtitle2" color={'gray'}>
          No: {number}
        </Typography>
        <Typography variant="h6">{name}</Typography>
      </NameColumn>
      {/* // TODO: MAKE THIS DYNAMIC COLOR */}
      <TypesColumn>
        {types?.map((type, index) => {
          return <Chip key={`${index}-${type}`} label={type} />
        })}
      </TypesColumn>
    </PokemonNameContainer>
  )
}

export default PokemonName
