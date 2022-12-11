import React from 'react'
import { styled } from '@mui/material/styles'
import {
  Box,
  LinearProgress,
  linearProgressClasses,
  Typography,
} from '@mui/material'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}))

// value range 0 - 100
const RenderBar = ({ text, value }: { text: string; value: number }) => {
  return (
    <Box sx={{ display: 'flex', gap: '5%', alignItems: 'center' }}>
      <Typography variant="body2">{text}</Typography>
      <BorderLinearProgress
        variant="determinate"
        sx={{ flex: 1 }}
        value={value}
      />
    </Box>
  )
}

export default RenderBar
