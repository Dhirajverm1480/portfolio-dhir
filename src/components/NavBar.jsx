import { Link, NavLink, useLocation } from "react-router-dom";
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
    </header>
  );
};

export default NavBar;
