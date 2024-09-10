import CardContainer from '../../components/card_container.jsx'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const projects = [
  
]

// current projects
export default function Projects(props) {
  return (
    <Box bgcolor='bg.light'>
      <Container
        id='proj'
        sx={{
          justifyContent: 'center',
          display: 'inline-flex',
          flexWrap: 'wrap',
          maxWidth: 'xl',
          py: 8,
        }}
      >
        <Typography color='text.secondary' variant='h3'>
          Personal Projects
        </Typography>
      </Container>
      <CardContainer col='bg.light' items={projects} />
    </Box>
  )
}
