import React from 'react'
import TextField from '@mui/material/TextField'

interface SearchInputProps {
  onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>
  value?: string
  onValueChange?: React.ChangeEventHandler<HTMLInputElement>
}

const SearchInput = ({ onKeyDown, value, onValueChange }: SearchInputProps) => {
  return (
    <TextField
      id="search-pokemon-input"
      data-testid="search-pokemon-input"
      placeholder="You can search by pressing Enter key"
      variant="standard"
      onKeyDown={onKeyDown}
      onChange={onValueChange}
      value={value}
      fullWidth={true}
    />
  )
}

export default SearchInput
