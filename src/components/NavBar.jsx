import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sticky top-0">
      <nav className="w-full flex justify-between items-center p-3">
        <Link to="/" className="text-2xl font-sans">Dhiraj Verma.</Link>
        <ul className="w-[25%] flex justify-between">
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
