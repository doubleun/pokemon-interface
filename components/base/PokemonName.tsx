import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { PokemonInterface } from '../../types'
import PokemonTypes from './PokemonType'

const PokemonNameContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
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
  return (
    <PokemonNameContainer>
      <NameColumn>
        <Typography variant="subtitle2" color={'gray'}>
          No: {number}
        </Typography>
        <Typography variant="h4">{name}</Typography>
      </NameColumn>
      <TypesColumn>
        {types?.map((type, index) => {
          return <PokemonTypes key={`${index}-${type}`} type={type} />
        })}
      </TypesColumn>
    </PokemonNameContainer>
  )
}

export default PokemonName
