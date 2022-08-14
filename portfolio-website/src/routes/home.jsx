import React from 'react'
import '../styles/App.css'
import Intro from './home/intro'
import Current from './home/current'
// import CssBaseline from '@mui/material/CssBaseline'
export default function Home() {
  return (
    <React.Fragment>
      <Intro />
      <Current />
      <Intro />
      <Intro />
      <Intro />
    </React.Fragment>
  )
}
