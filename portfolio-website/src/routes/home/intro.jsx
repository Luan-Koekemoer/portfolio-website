import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
//{
export default function Intro(Props: props) {
  return (
    <Box sx={{ bgcolor: 'bg.primary' }}>
      <Container
        id='home'
        sx={{
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          display: 'flex',
          maxWidth: 'xl',
          py: 8,
        }}
      >
        <Box>
          <Typography sx={{ pb: 2 }} variant='h2' color='text.primary'>
            Welcome to my Website
          </Typography>
          <Typography color='text.primary' fontSize='1.4em'>
            Hello, my name is{' '}
            <span style={{ fontWeight: '700', color: 'text.focus' }}>Luan</span>
            , and I am a Computer Science student and I love IT.
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.1em'>
            I've been programming for about 4 years now and it is safe to say I
            have explored about 90% of all the topics computer science has to
            offer. I have to admit I don't know everything, but I have a decent
            understanding of everything. I am definitely not afraid to explore
            and learn about anything I haven't heard of.
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.0em'>
            During my IT career so far, I had trouble figuring out what works
            for me. Questioning what I would like to focus my career in at the
            end. There are just an overwhelming amount of topics and these last
            few years I have just been jumping from one rabbit hole to the next.
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.2em'>
            I finally think I've come to a decision that I want to become an
            <span style={{ fontWeight: '700', color: 'text.focus' }}>
              {' '}
              AI Engineer.
            </span>
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.0em'>
            The skill set required for AI Engineering is just so big, since
            machine learning can be applied to almost everything. It really
            keeps me going, the problem solving aspect, different deployment
            techniques and data science.
          </Typography>
          <br />
        </Box>
        <Box>
          <img src='/images/me.png' width='100%' alt='self portrait' />
          <Typography color='text.primary' fontSize='1.0em'>
            Email: luan@luank.xyz
          </Typography>
          <Box sx={{ display: 'flex', alignContent: 'center' }}>
            <Typography color='text.primary' fontSize='1.0em'>
              GitHub:
            </Typography>
            <a href='https://github.com/Luan-Koekemoer' target='blank'>
              <img src='/images/gitw.png' width='26' height='26' alt='git' />
            </a>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
