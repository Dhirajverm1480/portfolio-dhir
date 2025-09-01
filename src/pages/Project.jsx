import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/ProjectCard";
import { projectsData, internshipData } from "../constants/data";
import gsap from "gsap";
import Title from "../components/Title";
// import { useState } from "react";

const Project = () => {
  // console.log("Data", projectsData);

  const internship = internshipData.internships[0];
  // console.log("Int: ", internship);

  useGSAP(() => {
    gsap.from("#projectCard", {
      opacity: 0,
      xPercent: 100,
      duration: 1.6,
      ease: "expo.out",
      stagger: 0.06,
    });
  }, []);

  // const [selectedTech, setSelectedTech] = useState('All')
  // const filterProject = selectedTech === 'All' ? projectsData.projects : projectsData.projects.filter(project => project.technologies.includes(selectedTech))

  return (
    <div className="page-frame overflow-hidden">
      {/* <div className="w-full md:flex sm:justify-center gap-2 sm:flex-wrap p-2">
        <button onClick={() => setSelectedTech('All')} className="btn border btn-hover flex-center rounded-full" >All</button>
        <button onClick={() => setSelectedTech('React')} className="btn border btn-hover flex-center rounded-full" >React</button>
        <button onClick={() => setSelectedTech('JS')} className="btn border btn-hover flex-center rounded-full" >JS</button>
      </div> */}
      <div className="w-full md:flex sm:justify-start sm:flex-wrap">
        {projectsData.projects.map((item) => (
          <div
            id="projectCard"
            key={item.id}
            className="md:w-[50%] lg:w-[33%] p-2"
          >
            <ProjectCard
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.images?.thumbnail}
            />
          </div>
        ))}
      </div>
      {/* <div className="w-full md:flex sm:justify- sm:flex-wrap p-2">
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
      <div>
        <Title title={"Internship"} />
        <div className="w-full md:flex justify-between pt-2">
          <div className="w-full md:w-[23%]"></div>
          <div className="w-full md:w-[70%]">
            <Title title={internship.title} />
            <div className="flex flex-wrap justify-between py-2">
              <span>{internship.company}</span>
              <span>
                <span>{internship.timeline.start}</span>{" "}
                <span>{internship.timeline.end}</span>
              </span>
              <span>{internship.timeline.duration}</span>
            </div>
            <div className="flex flex-wrap justify-between py-2" >
              <span>{internship.location}</span>
              <span>{internship.type}</span>
              <span></span>
            </div>
            <p className="py-2">{internship.description}</p>
            <div>
              <h4 className="text-md text-gray-400 py-2">Technologies :</h4>
              {internship.technologies.map((item, index) => (
                <p key={index} className="text-sm py-1">
                  {index + 1}. {item}.
                </p>
              ))}
            </div>
            <div>
              <h4 className="text-md text-gray-400 py-2">Responsibilities :</h4>
              {internship.responsibilities.map((item, index) => (
                <p key={index} className="text-sm py-1">
                  {index + 1}. {item}.
                </p>
              ))}
            </div>
            <div>
              <h4 className="text-md text-gray-400 py-2">Achievements :</h4>
              {internship.achievements.map((item, index) => (
                <p key={index} className="text-sm py-1">
                  {index + 1}. {item}.
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
