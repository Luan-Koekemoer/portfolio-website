import CardContainer from '../../components/card_container.jsx'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const certs = [

]

// current projects
export default function Certs(props) {
  return (
    <Box bgcolor='bg.dark'>
      <Container
        id = 'edu'
        sx={{
          justifyContent: 'center',
          display: 'inline-flex',
          flexWrap: 'wrap',
          maxWidth: 'xl',
          py: 8,
          my:1,
        }}
      >
        <Typography variant='h3'>Degrees and Certifications</Typography>
      </Container>
      <CardContainer col='bg.dark' items={certs} />
    </Box>
  )
}
