import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export function Deg1(props) {
  return (
    <Box sx={{ bgcolor: props.bg }}>
      <Container id='deg1' sx={{ maxWidth: 'xl', py: 8 }}>
        <Typography sx={{ pb: 2 }} variant='h4' color='text.primary'>
          BSc: IT, Majoring in Computer Science and Physics
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        </Box>
        <Typography variant='h6' fontWeight='600' color='text.primary'>
           Qualification Obtained 2021
        </Typography>
        <Typography color='text.primary'></Typography>
        <Typography color='text.primary'>Please email me for a copy of my degree.</Typography>
      </Container>
    </Box>
  )
}

export function Tensor(props) {
  return (
    <Box sx={{ bgcolor: props.bg }}>
      <Container
        id='tensor'
        sx={{ maxWidth: 'xl', py: 8, color: 'text.secondary' }}
      >
        <Typography sx={{ pb: 2 }} variant='h4'>
          DeepLearning.AI TensorFlow Developer
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}></Box>
        <Typography variant='h6' fontWeight='600'>
          Qualification Obtained 2022
        </Typography>
        <Typography fontWeight='600'>
          You can learn more about this course on the Coursera website{' '}
          <a
            href='https://www.coursera.org/professional-certificates/tensorflow-in-practice'
            target='blank'
          >
            here
          </a>
          .
        </Typography>
          <Typography>
        <a
          href='https://www.coursera.org/account/accomplishments/professional-cert/EVYLXVAAY7X5'
          target='blank'
        >
          Verify Certification
        </a>
          </Typography>
        <img src='/images/tensor.jpeg' width='80%' alt='tensor cert' />
        <Typography color='text.primary'></Typography>
      </Container>
    </Box>
  )
}

export function UdemyHack(props) {
  return (
    <Box sx={{ bgcolor: props.bg }}>
      <Container
        id='udhack'
        sx={{ maxWidth: 'xl', py: 8, color: 'text.primary' }}
      >
        <Typography sx={{ pb: 2 }} variant='h4'>
          Learn Ethical Hacking From Scratch
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}></Box>
        <Typography variant='h6' fontWeight='600'>
          Qualification Obtained 2022
        </Typography>
        <Typography fontWeight='600'>
          You can learn more about this course on the Udemy website{' '}
          <a
            href='https://www.udemy.com/course/learn-ethical-hacking-from-scratch/'
            target='blank'
          >
            here
          </a>
          .
        </Typography>
        <Typography>
        <a
          href='https://www.udemy.com/certificate/UC-8ccb3353-e8ca-468a-a0fe-236fc6bf8561/'
          target='blank'
        >
          Verify Certification
        </a>
        </Typography>
        <img src='/images/udemycyber.jpg' width='80%' alt='tensor cert' />
        <Typography color='text.primary'></Typography>
      </Container>
    </Box>
  )
}
