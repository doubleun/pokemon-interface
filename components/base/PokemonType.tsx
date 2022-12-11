import { Chip } from '@mui/material'
import React from 'react'

const handlePickTypeColor = (type: string) => {
  let colorSet = { color: 'white', bgColor: '##a9aa7f' }
  if (type === 'Poison') console.log('Poison', type)
  switch (type) {
    case 'Fire':
    case 'Rock':
      colorSet.bgColor = '#e08544'
      break
    case 'Grass':
    case 'Bug':
    case 'Electric':
    case 'Ground':
      colorSet.color = 'black'
      colorSet.bgColor = '#aab842'
      break
    case 'Fighting':
    case 'Dark':
    case 'Psychic':
      colorSet.bgColor = '#b23e33'
      break
    case 'Ghost':
    case 'Poison':
    case 'Dragon':
      colorSet.bgColor = '#6d5897'
      break
    case 'Flying':
    case 'Water':
      colorSet.bgColor = '#a491e8'
      break
    case 'Ice':
    case 'Steel':
      colorSet.color = 'black'
      colorSet.bgColor = '#a7d5d8'
      break
    default:
      colorSet.color = 'black'
      break
  }
  return colorSet
}

const PokemonTypes = ({ type }: { type: string }) => {
  const colorSet = handlePickTypeColor(type)
  return (
    <Chip
      label={type}
      sx={{ backgroundColor: colorSet.bgColor, color: colorSet.color }}
    />
  )
}

export default PokemonTypes
