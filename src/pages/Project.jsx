import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../constants/data";

const Project = () => {
  // console.log("Data", projectsData);

  return (
    <div className="page-frame">
      <div className="w-full sm:flex sm:justify-center sm:flex-wrap p-2">
        {projectsData.projects.map((item) => (
          <div key={item.id} className="sm:w-[30%] p-2">
            <ProjectCard
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              image={item.images?.thumbnail}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
