import { NavLink } from "react-router-dom";
import { Icon } from "../constants/data";

const navItems = [
  { to: "/", label: "Home", icon: Icon.HomeIcon },
  { to: "/about", label: "About", icon: Icon.BracketIcon },
  { to: "/project", label: "Project", icon: Icon.CodeIcon },
  { to: "/skills", label: "Skills", icon: Icon.BrainIcon },
  { to: "/contact", label: "Contact", icon: Icon.PhoneIcon },
];

const BottomNav = () => {
  return (
    <nav className="bottom-navigation">
      <ul className="flex justify-between">
        {navItems.map(({ to, label, icon }) => (
          <NavLink key={to} to={to} className="nav-link">
            <img src={icon} alt={label} className="nav-img-icon" />
            <span className="text-sm">{label}</span>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default BottomNav;
