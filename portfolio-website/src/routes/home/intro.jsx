import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Intro(Props: props) {
  return (
    <Box sx={{ bgcolor: 'bg.primary' }}>
      <Container id='home' sx={{ maxWidth: 'xl', py: 8 }}>
        <Typography color='text.primary'>
          Hello, and welcome to my personal website.  
        </Typography>
      </Container>
    </Box>
  )
}
