import React from 'react'
import Home from './routes/home'
import LearnMore from './routes/learnmore'
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App
