import React from 'react'
import Home from './routes/home'
import LearnMore from './routes/learnmoreproj'
import LearnMoreCert from './routes/learnmorecert'
import NavBar from './components/navbar'
import Footer from './components/footer.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/more/projects' element={<LearnMore />} />
          <Route path='/more/education' element={<LearnMoreCert />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App
