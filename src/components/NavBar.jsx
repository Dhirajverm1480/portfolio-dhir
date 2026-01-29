import { Link, NavLink, useLocation } from "react-router-dom";
// import { Icon } from "../constants/data";
// import { useState } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const NavBar = () => {

  const location = useLocation()

  useGSAP(() => {
    gsap.set("#header", {
      backgroundColor: "transparent", backdropFilter: "blur(0px)",
      boxShadow: "0 0 0 rgba(0,0,0,0)",
    });

    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: "top -80", // when you scroll 80px
      onEnter: () => gsap.to("#header", {
        backgroundColor: "#000000ee",
        backdropFilter: "blur(10px)", // blur effect
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)", // shadow
        duration: 0.7,
        ease: "power1.Out",
      }),
      onLeaveBack: () => gsap.to("#header", {
        backgroundColor: "transparent",
        backdropFilter: "blur(0px)",
        boxShadow: "0 0 0 rgba(0,0,0,0)",
        duration: 0.7,
        ease: "power1.out",
      }),
    })
    return () => trigger.kill()
  }, [location.pathname])

  return (
    <header id='header' className="sticky z-50 top-0 backdrop-blur-lg sm:backdrop-blur-0 px-3">
      <nav className="w-full flex justify-between items-center p-3">
        <div className="flex items-center gap-10">
          {/* <img
            onClick={() => setVisible(true)}
            src={Icon.MenuImg}
            alt="Open Menu"
            className="hidden cursor-pointer"
          /> */}
          <Link to="/" className="text-2xl font-sans">
            Dhiraj Verma.
          </Link>
        </div>
        <ul className="hidden w-[30%] sm:flex sm:justify-between gap-2">
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
        <Link to={'/contact'} className="p-2 border text-white rounded-md shadow-lg">
          Contact
        </Link>
      </nav>

      {/* <div
        className={`absolute top-0 left-0 bottom-0 overflow-hidden transition-all bg-[#000000e5] shadow-2xl ${visible ? "w-full h-screen" : "w-0"
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
      </div> */}
    </header>
  );
};

export default NavBar;
