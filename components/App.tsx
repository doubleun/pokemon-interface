import React from 'react'
import { Container } from '@mui/material'
import styled from '@emotion/styled'
import SearchBar from './composites/SearchBar'
import PokemonList from './composites/PokemonList'
import Loading from './base/Loading'

const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-block: 10px;
`

const App = () => {
  return (
    <AppContainer>
      <SearchBar />
      <PokemonList />
      <Loading />
    </AppContainer>
  )
}

export default App
