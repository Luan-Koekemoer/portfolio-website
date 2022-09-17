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
        <Typography variant='h6' fontWeight='600' color='text.primary'>
          What I am doing
        </Typography>
        <Typography color='text.primary'>
          Judging by the diverse selection of projects I have worked with you
          can probably tell I like to do a lot of things. I am doing a bit of
          everything! The thing is IT is such a diverse field and it has so many
          interesting things it has to offer it itches me to find out about
          somethign and not learn what it is about. I really like to explore all
          the topics, however recenlty I have come to realise I have to narrow
          down my interest on something sooner or later. Ever since I started
          dappeling in the field of AI by virtue of the work I'm doing for my
          honours degree and for curiousity's sake. I have a sense that I would
          like to focus more in Data Science and other related topics.
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
          The current plan is to finish most of the projects I have, or atleats
          get it in a somewhat retireable state. Compelete the active
          certifications and degrees then I will probably start practicing on
          random data sets I can find on websites like Kaggle for isntance. The
          thing is I have a lot of ideas, however with all the things going on
          sacrifice is sometimes necesarry. As I am still a student the ideal
          goal would be to be employed as a DataScienctist to start off my
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
          last two years. I just think having a fully customizable system is fun
          tayloring somethign exactly to my needs.
          <ul>
            <li>OS: Arch Linux</li>
            <li>WM: AwesomeWM</li>
            <li>IDE/Text Editor: NeoVim</li>
          </ul>
          More information of my system can be found in my{' '}
          <a href='https://github.com/Luan-Koekemoer/dotfiles'>Dotfiles</a>
        </Typography>
      </Container>
    </Box>
  )
}
