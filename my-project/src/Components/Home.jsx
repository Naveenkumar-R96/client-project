import React from 'react'
import { useCart } from '../Context/ContextApi.jsx';
const Home = () => {
    const {hi} = useCart(); // Assuming useCart is imported from ContextApi.jsx
  return (
    <div>
      <div className="bg-blue-300 w-8 h-8">{hi}</div>
    </div>
  )
}

export default Home
