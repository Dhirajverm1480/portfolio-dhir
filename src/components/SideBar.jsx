import { createPortal } from "react-dom";

const Sidebar = ({ visible, onClose }) => {
  if (!visible) return null;

  return createPortal(
    <div
      className="fixed z-[9999] top-0 left-0 right-0 bottom-0 bg-[#000000e5] flex flex-col p-4"
      style={{ width: "100vw", height: "100vh" }}
    >
      <button onClick={onClose} className="mb-8 text-white">Close</button>
       <div className='flex flex-col gap-10 pl-3'>
          <div className="flex justify-start py-4 cursor-pointer">
            <span onClick={() => setVisible(false)} className='side-text'>Close</span>
          </div>
          <NavLink to="/" onClick={() => setVisible(false)} className='side-text'>
            <span>Home</span>
          </NavLink>
          <NavLink to="/about" onClick={() => setVisible(false)} className='side-text'>
            <span>About</span>
          </NavLink>
          <NavLink to="/project" onClick={() => setVisible(false)} className='side-text'>
            <span>Project</span>
          </NavLink>
          <NavLink to="/skills" onClick={() => setVisible(false)} className='side-text' >
            <span>Skills</span>
          </NavLink>
          <NavLink to="/contact" onClick={() => setVisible(false)} className='side-text' >
            <span>Contact</span>
          </NavLink>
        </div>
    </div>,
    document.body
  );
};
