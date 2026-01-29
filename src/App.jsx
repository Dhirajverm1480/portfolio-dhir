import Image1 from "./assets/image1.webp";
import { Routes, Route } from "react-router-dom";
import { ScrollTrigger, SplitText } from "gsap/all";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import ProjectDetail from "./pages/ProjectDetail";
import gsap from "gsap";
import BottomNav from "./components/BottomNav";

gsap.registerPlugin(ScrollTrigger, SplitText);

export const backendUrl ="https://dhiraj-portfolio-backend.vercel.app"
// export const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  return (
    <div
      className="bg-cover text-white bg-no-repeat bg-center md:bg-fixed "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Image1})`,
      }}
    >
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectDetail/:id" element={<ProjectDetail />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <BottomNav />
    </div>
  );
};

export default App;
