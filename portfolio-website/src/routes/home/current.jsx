import ProjCard from '../../components/proj_card.jsx'

import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
const proj = {
  proj1: {
    title: 'Proj1',
    desc: 'Lizards are a widespread group of squamate reptiles, with over 6,00sspecies, ranging across all continents except Antarctica',
    img: 'https://imgs.search.brave.com/eb2azh7qN12U40CDg7EgTP_aX4znMiQEg93NLJCL964/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/aG90b3MtcHVibGlj/LWRvbWFpbi5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMTIv/MDMvZnJpbGxlZC1s/aXphcmQuanBn',
  },
}
export default function Current(Props: props) {
  return (
    <>
    <Box sx={{ bgcolor: 'bg.light' }}>
      <Container sx={{maxWidth:'xl', py: 8 }}>
        <ProjCard project={proj.proj1} />

      </Container>
    </Box>
    </>
)
}
