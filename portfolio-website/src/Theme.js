import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    bg: {
      light: '#DDE0EB',
      primary: '#08153D',
      dark: '#242424',
    },
    primary: {
      main: '#08153D',
    },
    secondary: {
      main: '#114978',
    },
    accent: {
      main: '#58F501',
    },
    text: {
      focus: '#F9FCF7',
      primary: '#DDE0EB',
      secondary: '#242424',
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        sx: {
          boxShadow: 0,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
})
