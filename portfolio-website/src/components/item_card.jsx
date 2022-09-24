import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { StyledNavHashLink as Link, StyledHoverBox } from './custom_mui.jsx'

function Tag({ tag }) {
  return (
    <Box
      key={Math.random()}
      sx={{
        display: 'inline-flex',
        bgcolor: 'bg.dark',
        borderColor: 'text.primary',
        mt: 1,
        px: 1,
        border: 1,
        height: '1.2rem',
        borderRadius: '20px',
      }}
    >
      <Typography fontSize='12px' color='text.primary' align='center'>
        {tag}
      </Typography>
    </Box>
  )
}
export default function ItemCard(props) {
  return (
    <Card
      key={props.item.id}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 500,
        width: 300,
        border: 1,
        m: '0.5rem',
        backgroundColor: 'bg.light',
        borderColor: 'primary.main',
        borderRadius: '10px',
      }}
    >
      <Box>
        {props.item.img ? (
          <CardMedia
            component='img'
            height='150'
            image={props.item.img}
            alt='img'
          />
        ) : (
          <></>
        )}
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
            component='div'
            color='text.secondary'
          >
            {props.item.title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {props.item.desc}
          </Typography>
          <Box sx={{ display: 'inline-flex' }}>
            <Typography
              sx={{ mr: 1 }}
              fontWeight='600'
              variant='body2'
              color='text.secondary'
            >
              Status:
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {props.item.status}
            </Typography>
          </Box>
          <br />
          <Box sx={{ display: 'inline-flex' }}>
            <Typography
              sx={{ mr: 1 }}
              fontWeight='600'
              variant='body2'
              color='text.secondary'
            >
              Date:
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {' '}
              {props.item.status === 'Development' ||
              props.item.status === 'Busy'
                ? 'est. ' + props.item.date
                : props.item.date}
            </Typography>
          </Box>
          <Box>
            <Typography fontWeight='600' variant='body2' color='text.secondary'>
              Tags:
            </Typography>
            {props.item.tags.map((t) => Tag({ tag: t }))}
          </Box>
        </CardContent>
      </Box>
      <Box>
        <CardActions
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {/*Learn More*/}
          {props.item.long_desc === '' ? (
            <Button disabled={true} size='small'></Button> // keep the spacing
          ) : (
            <StyledHoverBox  sx={{ p: 0.5 }}>
              <Link
                to={props.item.long_desc}
                smooth
                sx={{ color: 'text.secondary' , p:1}}
              >
                Learn More
              </Link>
            </StyledHoverBox>
          )}

          {/*Git Icon*/}
          {props.item.git === '' ? (
            <React.Fragment></React.Fragment>
          ) : (
            <Button
              component='a'
              href={props.item.git}
              target='_blank'
              size='small'
            >
              <img
                height='30rem'
                width='30rem'
                src='/images/git.png'
                alt='github logo'
              />
            </Button>
          )}
        </CardActions>
      </Box>
    </Card>
  )
}
/* {props.item.tags.map((t) => (Tag key={"t" + props.item.id} tag={t}) />} */
