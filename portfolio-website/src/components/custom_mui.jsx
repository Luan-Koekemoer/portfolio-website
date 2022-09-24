import { Button, Typography, Link, Box } from '@mui/material'
import { HashLink } from 'react-router-hash-link'
import { styled } from '@mui/material/styles'
import { theme } from '../Theme'

export const StyledHoverBox = styled(Box, { theme })({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.bg.light,
  pb: '30px',
  '&:hover': {
  borderRadius: '10px',
    fontWeight: 'bold',
    color: theme.palette.text.focus,
    backgroundColor: theme.palette.bg.dark,
  },
})
export const StyledButton = styled(Button, { theme })({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.bg.light,
  '&:hover': {
    fontWeight: 'bold',
    color: theme.palette.text.focus,
    backgroundColor: theme.palette.bg.dark,
  },
})

export const StyledNavTypography = styled(Typography, { theme })({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    fontWeight: 'bold',
    color: theme.palette.text.focus,
  },
})

export const StyledNavHashLink = styled(HashLink, { theme })({
  color: theme.palette.text.primary,
  textDecoration: 'none',

  '&:focus': {
    textDecoration: 'none',
  },

  '&:hover': {
    fontWeight: 'bold',
    color: theme.palette.text.focus,
    textDecoration: 'none',
  },

  '&:visited': {
    textDecoration: 'none',
  },

  '&:link': {
    textDecoration: 'none',
  },

  '&:active': {
    textDecoration: 'none',
  },
})

export const StyledLink = styled(Link, { theme })({
  color: theme.palette.text.primary,
  textDecoration: 'none',

  '&:focus': {
    textDecoration: 'none',
  },

  '&:hover': {
    fontWeight: 'bold',
    color: theme.palette.text.focus,
    textDecoration: 'none',
  },

  '&:visited': {},

  '&:link': {},

  '&:active': {},
})
