import React from 'react'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-full h-[100vh] border flex justify-center items-center'>
      <div>
        <ul className="flex flex-col gap-5 text-4xl">
                  <NavLink to="/">
                    <span>Home</span>
                  </NavLink>
                  <NavLink to="/about">
                    <span>About</span>
                  </NavLink>
                  <NavLink to="/project">
                    <span>Project</span>
                  </NavLink>
                  <NavLink to="/skills">
                    <span>Skills</span>
                  </NavLink>
                  <NavLink to="/contact">
                    <span>Contact</span>
                  </NavLink>
                </ul>
      </div>
    </div>
  )
}

export default SideBar
