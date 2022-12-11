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
      id="standard-basic"
      placeholder="Search"
      variant="standard"
      onKeyDown={onKeyDown}
      onChange={onValueChange}
      value={value}
      fullWidth={true}
    />
  )
}

export default SearchInput
