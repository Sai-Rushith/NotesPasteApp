import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-10 place-content-evenly bg-gray-700 text-white'>
       
        <NavLink
        to={"/"} >
 
          <p className='text-white'>Home</p>  
        </NavLink>

       
      
        <NavLink
        to={"/pastes"}
        >
     <p className='text-white'> Pastes</p>
</NavLink>

    </div>
  )
}

export default Navbar