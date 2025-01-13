import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
//{
export default function Intro(props) {
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
            Welcome to my Portfolio
          </Typography>
          <Typography color='text.primary' fontSize='1.4em'>
            Hello, my name is{' '}
            <span style={{ fontWeight: '700', color: 'text.focus' }}>Luan</span>
            {' '} and I am currently {Math.round((new Date() - new Date(2000, 9, 3)) / (31557600 * 1000), 2)} years old and I am a Software Engineer.
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.0em'>
          I am a hardworking developer, always striving to write maintainable and efficient code. 
          Being an eager learner I always find myself in situations that are challenging and help me grow. 
          Good thing that I am not scared of a challenge, having a unique background and a desire for aquiring 
          new skills I enjoy difficult problems and always find a way to solve them. 
          Especially when it comes to bug fixes I love finding out the root cause to find more permanent solutions for re-occuring problems.
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.0em'>
          Having worked in the industry since 2023, I found out that I can pick up new projects fast and still meet stricter deadlines when push comes to shove.
          I learned that to meet these deliverables is essential to understand the role of your teammates, sharing knowledge is key to writing good software. 
          Naturally I am good at explaining so helping out teammates in return is always fun.
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.0em'>
            However, my experience is not limited to my current job. On my free time I enjoy playing around with GNU/Linux or FreeBSD and self-hosting servers for all sorts of applications like my peronal cloud instance and email server. 
            I also really like automating repetitive tasks with scripts even if I end up spending 5 hours to automate a 5 min task, I'll pay off eventually haha!
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.0em'>
            My current vision of where I want to go in my career. As an analytical thinker I really enjoy big picture problem solving. Due to my broad understanding of the 
            whole software ecosystem,searching, I would like to see myself in a more architectural role one day!
          </Typography>
          <br />
        </Box>
        <Box>
          <img src='/images/me.png' width='100%' alt='self portrait' />
          <Typography color='text.primary' fontSize='1.0em' style={{width: 300}}>
            Email: luankoeke@gmail.com
          </Typography>
          <Typography color='text.primary' fontSize='1.0em'>
            LinkedIn: <a href='https://www.linkedin.com/in/luan-koekemoer-51b818346/' target='blank' style={{color: 'inherit',  textDecoration: 'none', fontWeight: 600}}>
            <img src='/images/linkedin.png' width='26' height='26' alt='git' />

            </a>
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
