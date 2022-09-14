import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ItemCard from './item_card.jsx'

export default function CardContainer(props) {
  return (
    <Box sx={{ display: 'flex', bgcolor: props.col }}>
      <Container
        sx={{
          justifyContent: 'center',
          display: 'inline-flex',
          flexWrap: 'wrap',
          maxWidth: 'xl',
          py: 8,
        }}
      >
        {props.items.map((i) => (
          <ItemCard key={i.id} item={i} />
        ))}
      </Container>
    </Box>
  )
}
