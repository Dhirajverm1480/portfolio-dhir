import Image1 from "./assets/image1.png";
import { Routes, Route } from "react-router-dom";
import { ScrollTrigger, SplitText } from "gsap/all";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Skills from "./pages/Skills";
import ProjectDetail from './pages/ProjectDetail'
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div
      className="bg-cover text-white bg-no-repeat bg-fixed bg-center "
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${Image1})`,
      }}
    >
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/projectDetail/:id" element={<ProjectDetail />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
