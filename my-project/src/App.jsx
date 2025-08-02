import React from 'react'
import AllRoutes from './Routes/AllRoutes.jsx'
import NavBar from './Components/NavBar.jsx'
import Footer from './Components/Footer.jsx'
const App = () => {
  return (
    <div className='min-h-screen font-italic'>
      <NavBar className=""/>
      <AllRoutes/>
      <Footer/>
    </div>
  )
}

export default App
