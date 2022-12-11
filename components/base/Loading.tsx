import styled from '@emotion/styled'
import { Box, CircularProgress, Typography } from '@mui/material'
import React, { useContext } from 'react'
import AppContext from '../AppContext'

const LoadingContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`

const Loading = () => {
  const context = useContext(AppContext)
  return (
    <LoadingContainer>
      {context.isLoading ? (
        <>
          <CircularProgress size={80} />
          <Typography variant="h6">Loading ...</Typography>
        </>
      ) : null}
    </LoadingContainer>
  )
}

export default Loading
