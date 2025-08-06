import { Link, NavLink } from "react-router-dom";
import MenuImg from '../assets/icons/menu-left.png'

const NavBar = () => {
  return (
    <div className="sticky top-0 border-b backdrop-blur-lg">
      <nav className="w-full flex justify-between items-center p-3">
        <div className="flex items-center gap-10">
          <img src={MenuImg} alt="" className="cursor-pointer"/>
          <Link to="/" className="text-2xl font-sans">Dhiraj Verma.</Link>
        </div>
        <ul className="hidden sm:block w-[25%] sm:flex sm:justify-between">
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
        <button className="p-2 bg-slate-400 text-white rounded-md shadow-lg">Contact</button>
      </nav>
    </div>
  );
};

export default NavBar;
