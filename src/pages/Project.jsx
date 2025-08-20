import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../constants/data";
import gsap from "gsap";
// import { useState } from "react";

const Project = () => {
  // console.log("Data", projectsData);

  useGSAP(() => {
    gsap.from('#projectCard',{
      opacity: 0,
      xPercent: 100,
      duration: 1.6,
      ease: 'expo.out',
      stagger: 0.06,
    })
  }, [])

  // const [selectedTech, setSelectedTech] = useState('All')
  // const filterProject = selectedTech === 'All' ? projectsData.projects : projectsData.projects.filter(project => project.technologies.includes(selectedTech))

  return (
    <div className="page-frame overflow-hidden">
      {/* <div className="flex-center gap-2">
        <button onClick={() => setSelectedTech('React')} className="btn border btn-hover flex-center" >All</button>
        <button onClick={() => setSelectedTech('React')} className="btn border btn-hover flex-center" >React</button>
        <button onClick={() => setSelectedTech('React')} className="btn border btn-hover flex-center" >JS</button>
        <button onClick={() => setSelectedTech('React')} className="btn border btn-hover flex-center" >React</button>
      </div> */}
      <div className="w-full md:flex sm:justify-center sm:flex-wrap p-2">
        {projectsData.projects.map((item) => (
          <div id="projectCard" key={item.id} className="md:w-[50%] lg:w-[30%] p-2">
            <ProjectCard
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.images?.thumbnail}
            />
          </div>
        ))}
      </div>
      {/* <div className="w-full md:flex sm:justify-center sm:flex-wrap p-2">
        {filterProject.map((item) => (
          <div id="projectCard" key={item.id} className="md:w-[50%] lg:w-[30%] p-2">
            <ProjectCard
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.images?.thumbnail}
            />
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Project;
