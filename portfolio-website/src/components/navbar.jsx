import React from 'react'

//MaterialUI
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import CssBaseline from '@mui/material/CssBaseline'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Slide from '@mui/material/Slide'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { StyledNavHashLink as Link } from './custom_mui.jsx'
import { StyledNavTypography } from './custom_mui'
import '../styles/navbar.css'

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}
export default function NavBar(props: Props) {
  const pages = [
    { name: 'Home', link: '/#home' },
    { name: 'Projects', link: '/#proj' },
    { name: 'Education', link: '/#edu' },
    { name: 'About', link: '/#about' },
    { name: 'More on Projects', link: '/more/projects/' },
    { name: 'More on Education', link: '/more/education/' },
  ]

  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }
  /* <StyledNavButton */
  /*   key={page.name} */
  /*   onClick={handleCloseNavMenu} */
  /*   href={page.link} */
  /* > */
  /*   {page.name} */
  /* </StyledNavButton> */

  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Container maxWidth='lg'>
            <Toolbar disableGutters>
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              <Typography
                variant='h6'
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  /* letterSpacing: '.3rem', */
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Luan Koekemoer
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: 'flex', md: 'none' },
                }}
              >
                <IconButton
                  size='large'
                  aria-label='account of current user'
                  aria-controls='menu-appbar'
                  aria-haspopup='true'
                  onClick={handleOpenNavMenu}
                  color='inherit'
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id='menu-appbar'
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                      <StyledNavTypography textAlign='center' sx={{bgcolor:'#FFF'}}>
                        <Link
                          smooth
                          to={page.link}
                          className='text-link'
                          sx={{ color: 'text.secondary', bgcolor: '#FFF' }}
                        >
                          {page.name}
                        </Link>
                      </StyledNavTypography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Box
                variant='h5'
                component='a'
                href=''
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                }}
              ></Box>
              <Typography
                variant='h6'
                noWrap
                component='a'
                href='/'
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  /* letterSpacing: '.3rem', */
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Luan Koekemoer
              </Typography>
              <Box
                sx={{
                  pr: '15em',
                  flexGrow: 1,
                  justifyContent: 'center',
                  display: { xs: 'none', md: 'flex' },
                }}
              >
                {pages.map((page) => (
                  <Box key={page.name} sx={{ mx: 1 }}>
                    <Link to={page.link} smooth>
                      {page.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}
