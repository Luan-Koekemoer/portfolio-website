import React from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function About() {
  return (
    <Box sx={{ bgcolor: 'bg.primary' }}>
      <Container id='about' sx={{ maxWidth: 'xl', py: 8 }}>
        <Typography sx={{ pb: 2 }} variant='h4' color='text.primary'>
          About
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
                MySQL <br />
                graphQL <br />
              </Box>
              <Box>
                Spin (Model Checking) <br />
                Servers
                <br />
                Cyber Security
                <br />
                MongoDB <br />
                <br />
              </Box>
            </Box>
          </Box>
        </Box>
        <Typography variant='h6' fontWeight='600' color='text.primary'>
          What I am doing
        </Typography>
        <Typography color='text.primary'>
          Judging by the diverse selection of projects I have worked with you
          can probably tell I like to do a lot of things. I am doing a bit of
          everything! The thing is IT is such a diverse field and it has so many
          interesting things it has to offer it itches me to find out about
          something and not learn what it is about. I really like to explore all
          the topics, however recently I have come to realise I have to narrow
          down my interest on something sooner or later. Ever since I started
          exploring in the field of AI by virtue of the work I'm doing for my
          honours degree and for curiosity's sake. I have a sense that I would
          like to focus more in AI Engineer/ Data Scientist and other related
          topics.
        </Typography>
        <Typography
          sx={{ pt: 2 }}
          variant='h6'
          fontWeight='600'
          color='text.primary'
        >
          Current Plans
        </Typography>
        <Typography color='text.primary'>
          The current plan is to finish most of the projects I have, or at least
          get it in a somewhat retirable State. Complete the active
          certifications and degrees then I will probably start practicing on
          random data sets I can find on websites like Kaggle for instance. The
          thing is I have a lot of ideas, however with all the things going on
          sacrifice is sometimes necessary. As I am still a student the ideal
          goal would be to be employed as a Data Scientist to start off my
          career.
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
          last two years. I just think having a fully customizable system is
          fun, where I can tailor something exactly to my liking. More
          information of my system can be found in my{' '}
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
