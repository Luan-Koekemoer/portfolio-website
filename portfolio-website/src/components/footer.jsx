import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Footer(Props: props) {
  return (
    <Box sx={{ bgcolor: 'bg.dark' }}>
      <Container sx={{ maxWidth: 'xl', py: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Typography color='text.primary'>
            <span>&nbsp;&bull;</span> MIT License
          </Typography>
          <Typography color='text.primary'>
            <a href='https://github.com/Luan-Koekemoer' target='blank'>
              <img
                src='/images/git.png'
                height='25'
                width='25'
                alt='git'
              />
            </a>
          </Typography>
          <Typography color='text.primary'>
            <span>&nbsp;&bull;</span> Email: luan@luank.xyz
          </Typography>
          <Typography color='text.primary'>
            <span>&nbsp;&bull;</span> 2022
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}
