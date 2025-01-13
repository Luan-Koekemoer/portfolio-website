import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Skills() {
  return (
    <Box sx={{ bgcolor: 'bg.primary' }}>
      <Container id='about' sx={{ maxWidth: 'xl', py: 8 }}>
        <Typography sx={{ pb: 2 }} variant='h4' color='text.primary'>
          Skills
        </Typography>
        <Typography
          sx={{ pt: 2 }}
          variant='h5'
          fontWeight='600'
          color='text.primary'
        >
          Technologies
        </Typography>
        <br />
        <Box
          sx={{
            pb: 5,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          <Box>
            <Typography color='text.focus' fontSize='1.2em' fontWeight='600'>
              Programming
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Box sx={{ pr: 2, pb: 2 }}>
                C# <br />
                C++ <br />
                Python <br />
                Java <br />
                JavaScript <br />
              </Box>
              <Box>
                Rust <br />
                SQL <br />
                Dart <br />
                HTML & CSS <br />
                Lua
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography color='text.focus' fontSize='1.2em' fontWeight='600'>
              Frameworks
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Box sx={{ pr: 5 }}>
                Tensorflow <br />
                React
                <br /> ASP.Net
                <br /> Flutter
              </Box>
            </Box>
          </Box>
          <Box>
            <Typography color='text.focus' fontSize='1.2em' fontWeight='600'>
              Devops
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
              <Box sx={{ pr: 5 }}>
                Git <br />
                Linux <br />
                Networking <br />
                Postgres <br />
                Azure <br/>
                MySQL <br />
                Weka
              </Box>
              <Box>
                Spin (Model Checking) <br />
                Docker <br />
                Jenkins <br />
                Servers <br />
                Cyber Security <br />
                MongoDB <br />
                <br />
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography variant='h6' fontWeight='600' color='text.primary'>
          I love what I do
        </Typography>
        <Typography color='text.primary'>
          Challenges and problem solving is what I live for. I enjoy spending my
          time tweaking my work environment, experimenting with systems, and to
          an extent fixing my computers, be it hardware or software related. I
          always try to help others when they face technical problems because I
          always see it as an opportunity where I can learn something new.
          <br />
          <br />
          Judging by the diverse selection of projects I have worked on you can
          probably tell I like to do a lot of things. IT is such a diverse field
          and offers so many interesting things. When I find out about something
          I haven't heard about it itches me to not learn what it is about.
          "Another rabbit hole, surely it wouldn't take that long". 
        </Typography>

        <Typography
          sx={{ pt: 2 }}
          variant='h6'
          fontWeight='600'
          color='text.primary'
        >
          My Setup
        </Typography>
        <Typography color='text.primary'>
          I am on Arch Linux and I have been using Linux as my main OS for the
          last {new Date().getFullYear() - 2020} years. I just think having a
          fully customizable system is fun, where I can tailor something exactly
          to my liking. More information of my system can be found in my{' '}
          <a
            href='https://github.com/Luan-Koekemoer/dotfiles'
            target='blank'
            className='lightlink'
          >
            Dotfiles
          </a>
        </Typography>
        <ul>
          <li>OS: Arch Linux</li>
          <li>WM: AwesomeWM</li>
          <li>IDE/Text Editor: NeoVim</li>
        </ul>
      </Container>
    </Box>
  )
}
