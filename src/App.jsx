import React from './pages/React'
import Landingpage from './pages/Landingpage'
import { Route, Routes } from 'react-router-dom'
import Html from './pages/Html'
import Css from './pages/Css'
import Javascript from './pages/Javascript'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/html' element={<Html/>}/>
        <Route path='/css' element={<Css/>}/>
        <Route path='/javascript' element={<Javascript/>}/>
        <Route path='/react' element={<React/>}/>

      </Routes>
    </div>
  )
}

export default App
