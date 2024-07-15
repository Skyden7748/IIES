
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import React from 'react';



import Home from './pages/Home'

import About from './pages/About' 
import Contact from './pages/Contact'

import Donations from './pages/Donations'
import Footer from './components/Footer'
import NavBar from './components/NavBar'








function App() {
  

  return (
    <Router>
         <NavBar/>
    
     
         <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About/>} /> 
         <Route path='/donations' element={ <Donations/>} /> 
         <Route path='/contact' element={ <Contact/>}/>


         </Routes>
       <Footer/>
    </Router>
  )
}

export default App
