import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import ItemCard from './item_card.jsx'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

// import required modules
import { FreeMode, Pagination } from 'swiper'

export default function CardContainer(props) {
  function swiper(size) {
    return (
      <Swiper
        slidesPerView={size}
        spaceBetween={0}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'
      >
        {props.items.map((i) => (
          <SwiperSlide key={i.id}>
            <ItemCard item={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }
  return (
    <Box sx={{ display: 'flex', bgcolor: props.col }}>
      {/* standard devices */}
      <Container
        sx={{
          display: { xs: 'none', md: 'flex' },
          pb: 5,
        }}
      >
        {swiper(3)}
      </Container>

      {/* smaller devices */}
      <Container
        sx={{
          display: { xs: 'flex', md: 'none' },
          pb: 5,
        }}
      >
        {swiper(1)}
      </Container>
    </Box>
  )
}
