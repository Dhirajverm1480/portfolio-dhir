import { Link, NavLink } from "react-router-dom";
import MenuImg from "../assets/icons/menu-left.png";
import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const NavBar = () => {

  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger : {
        trigger: '#header',
        start: 'bottom top'
      }
    });

    navTween.fromTo('#header', { backgroundColor : 'transparent'}, {
      backgroundColor: '#00000090',
      // backgroundFilter : 'blur(10px)',
      duration: 1,
      ease: 'power1.inOut'
    })
  }, [])

  const [visible, setVisible] = useState(false);

  return (
    <header id='header' className="sticky z-50 top-0 backdrop-blur-lg sm:backdrop-blur-0">
      <nav className="w-full flex justify-between items-center p-3">
        <div className="flex items-center gap-10">
          <img
            onClick={() => setVisible(true)}
            src={MenuImg}
            alt=""
            className="sm:hidden cursor-pointer"
          />
          <Link to="/" className="text-2xl font-sans">
            Dhiraj Verma.
          </Link>
        </div>
        <ul className="hidden sm:block w-[30%] sm:flex sm:justify-between gap-2">
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
        <Link to={'/contact'} className="p-2 bg-slate-400 text-white rounded-md shadow-lg">
          Contact
        </Link>
      </nav>

      <div
        className={`absolute top-0 left-0 bottom-0 overflow-hidden transition-all bg-[#000000e5] shadow-2xl ${
          visible ? "w-full h-screen" : "w-0"
        }`}
      >
        <div className="flex flex-col gap-10 pl-3">
          <div className="flex justify-start py-4 cursor-pointer">
            <span onClick={() => setVisible(false)} className="side-text">
              Close
            </span>
          </div>
          <NavLink
            to="/"
            onClick={() => setVisible(false)}
            className="side-text"
          >
            <span>Home</span>
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="side-text"
          >
            <span>About</span>
          </NavLink>
          <NavLink
            to="/project"
            onClick={() => setVisible(false)}
            className="side-text"
          >
            <span>Project</span>
          </NavLink>
          <NavLink
            to="/skills"
            onClick={() => setVisible(false)}
            className="side-text"
          >
            <span>Skills</span>
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="side-text"
          >
            <span>Contact</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
