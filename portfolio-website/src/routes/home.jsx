import React from 'react'
import '../styles/App.css'
import Intro from './home/intro'
import Projects from './home/projects.jsx'
import Certs from './home/certs.jsx'
import Skills from './home/skills.jsx'
import History from './home/history.jsx'
// import CssBaseline from '@mui/material/CssBaseline'
export default function Home() {
  return (
    <React.Fragment>
      <Intro />
      <Certs />
      <Projects />
      <Skills />
      <History/>
    </React.Fragment>
  )
}
