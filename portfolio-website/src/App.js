import React from 'react'
import Home from './routes/home'
import NavBar from './components/navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}
export default App
