import React from 'react'
import { NavLink } from 'react-router-dom'
import HomeIcon from '../assets/icons/home.png';
import CodeIcon from '../assets/icons/code-alt.png';
import BrainIcon from '../assets/icons/brain.png';
import PhoneIcon from '../assets/icons/phone.png';
import BraketIcon from '../assets/icons/bracket-curly.png';

const BottomNav = () => {
  return (
    <nav className='bottom-navigation'>
      <ul className="flex justify-between">
          <NavLink to="/" className='nav-link'>
            <img src={HomeIcon} alt="" className='nav-img-icon' />
            <span className='text-sm'>Home</span>
          </NavLink>
          <NavLink to="/about" className='nav-link'>
            <img src={BraketIcon} alt="" className='nav-img-icon' />
            <span className='text-sm'>About</span>
          </NavLink>
          <NavLink to="/project" className='nav-link'>
            <img src={CodeIcon} alt="" className='nav-img-icon' />
            <span className='text-sm'>Project</span>
          </NavLink>
          <NavLink to="/skills" className='nav-link'>
            <img src={BrainIcon} alt="" className='nav-img-icon' />
            <span className='text-sm'>Skills</span>
          </NavLink>
          <NavLink to="/contact" className='nav-link'>
            <img src={PhoneIcon} alt="" className='nav-img-icon' />
            <span className='text-sm'>Contact</span>
          </NavLink>
        </ul>
    </nav>
  )
}

export default BottomNav