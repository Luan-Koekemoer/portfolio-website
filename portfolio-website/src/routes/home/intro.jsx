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
            offer. I am a flexible, hard working indiviudal that enjoys
            challenges and to solve complex problems, the type of problems most
            people are afraid to take on. Even if it is unfamaliar grounds I
            will always be willing to learn about anything I haven't heard of.
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.0em'>
            During my IT career so far, I had trouble figuring out what works
            for me. Questioning what I would like to focus my career in at the
            end. There are just an overwhelming amount of topics and these last
            few years I have just been jumping from one rabbit hole to the next.
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.0em'>
            I have a great interest in systems engineering, automation tasks,
            machine learning, embedded systems, and just engineering in general.
            I also enjoy creating architectures as I believe I have very good
            insight when it comes to analysis and planning as I generally come
            up with preamtive solutions before the problems are encountered.
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
