import React from './pages/React'
import Landingpage from './pages/Landingpage'
import { Route, Routes } from 'react-router-dom'
import Html from './pages/Html'
import Css from './pages/Css'
import Javascript from './pages/Javascript'
import Nodejs from './pages/Node'
import Expressjs from './pages/Expressjs'
import MongoDB from './pages/Mongodb'
import Tailwind from './pages/Tailwind'
import GitAndGitHub from './pages/Gitandgithub'
import APIs from './pages/Apis'
import ResponsiveDesign from './pages/ResponsiveDesign'
import WebSecurity from './pages/Websecurity'
import Deployment from './pages/Deployment'
import Debugging from './pages/Debugging'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/html' element={<Html/>}/>
        <Route path='/css' element={<Css/>}/>
        <Route path='/javascript' element={<Javascript/>}/>
        <Route path='/react' element={<React/>}/>
        <Route path='/node.js' element={<Nodejs/>} />
        <Route path='/express' element={<Expressjs/>} />
        <Route path='/mongodb' element={<MongoDB/>}/>
        <Route path='/tailwind css' element={<Tailwind/>}/>
        <Route path='/git & github' element={<GitAndGitHub/>}/>
        <Route path='/apis' element={<APIs/>}/>
        <Route path='/responsive design' element={<ResponsiveDesign/>}/>
        <Route path='/web security' element={<WebSecurity/>}/>
        <Route path='/deployment' element={<Deployment/>}/>
        <Route path='/debugging' element={<Debugging/>}/>

      </Routes>
    </div>
  )
}

export default App
