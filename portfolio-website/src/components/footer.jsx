import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Footer(Props: props) {
  return (
    <Box sx={{ bgcolor: 'bg.dark' }}>
      <Container sx={{maxWidth:'xl', py: 8 }}>
        <Typography color='text.primary'>
           footer 
        </Typography>
      </Container>
    </Box>
  )
}
