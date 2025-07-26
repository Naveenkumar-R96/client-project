import React from 'react'
import AllRoutes from './Routes/AllRoutes.jsx'
import NavBar from './Components/NavBar.jsx'
const App = () => {
  return (
    <div className='min-h-screen'>
      <NavBar className=""/>
      <AllRoutes/>
    </div>
  )
}

export default App
