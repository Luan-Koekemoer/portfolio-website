import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'
import {theme} from '../Theme'

export const StyledNavButton = styled(Button, { theme })({
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    fontWeight: 'bold',
    color: theme.palette.text.focus,
  },
})
