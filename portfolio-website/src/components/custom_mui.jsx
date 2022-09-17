import { Button, Typography } from '@mui/material'
import { HashLink } from 'react-router-hash-link'
import { styled } from '@mui/material/styles'
import { theme } from '../Theme'

export const StyledNavButton = styled(Button, { theme })({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    fontWeight: 'bold',
    color: theme.palette.text.focus,
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
