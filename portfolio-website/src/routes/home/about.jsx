import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function About() {
  return (
      <Box sx={{ bgcolor: 'bg.primary' }}>
      <Container id='about' sx={{maxWidth:'xl', py: 8 }}>
        <Typography color='text.primary'>
        What I am doing,
        my goals

        my system
        what i like
        </Typography>
        </Container>
      </Box>
  )
}
