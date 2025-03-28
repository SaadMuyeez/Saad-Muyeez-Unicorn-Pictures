import React from 'react'
import Home from './pages/Home'
import Movies from './pages/Movies'
import About from './pages/About'
import Contact from './pages/Contact'
import CustomAlert from './components/CustomAlert'

const App = () => {
  return (
    <div>
      {/* <CustomAlert/> */}
      <Home/>
      <About/>
      <Movies/>
      <Contact/>
    </div>
  )
}
export default App
