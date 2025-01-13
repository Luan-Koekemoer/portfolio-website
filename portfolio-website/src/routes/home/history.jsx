import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
//{
export default function History(props) {
  return (
    <Box sx={{ bgcolor: 'bg.dark' }}>
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
            <Typography sx={{ pb: 2 }} variant='h4' color='text.primary'>
            More About Myself
            </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.1em'>
            I started using a personal home computer in the early 2010s, I remember how excited I was when I saw the Windows XP logo appear on the first boot. 
            It was a whole new world I had disovered and as a curious person in nature, it sparked a new interest. I really enjoyed exploring the operating system, 
            learning how to do the basic operations, and learning to trouble shoot along with it. 
          </Typography>
          <br />
          <Typography color='text.primary' fontSize='1.0em'>
            As time progressed I naturally learned more about the complicated aspects of the windows operating system.
            Along with it learned all sorts of digital skills for fun such as;  electronic music production, 3D modeling and photo editing. 
            Then in 2019, right after I finished high school,
            I enrolled into Univesrity for an IT and Physics degree where I learned about programming for the first time. From there I for sure fell into the Computer Science rabbit hole, 
            self studying all sorts of concepts even before I had any related courses. Topics I have learned vary all around scope of Computer Science these are things like 
            Multiple Programming Languages, Artificial Intellegence, Communication and security, Game Developement, Servers and Linux, Databases, Theory of Computation etc. 
            I am still learning new topics as a hobbiest.
          </Typography>
          <br />
        </Box>
      </Container>
    </Box>
  )
}
