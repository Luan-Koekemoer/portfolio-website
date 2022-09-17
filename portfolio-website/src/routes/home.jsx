import React from 'react'
import '../styles/App.css'
import Intro from './home/intro'
import Projects from './home/projects.jsx'
import Certs from './home/certs.jsx'
import About from './home/about.jsx'
import Footer from '../components/footer.jsx'
// import CssBaseline from '@mui/material/CssBaseline'
export default function Home() {
  return (
    <React.Fragment>
      <Intro />
      <Projects />
      <Certs />
      <About />
      <Footer />
    </React.Fragment>
  )
}
