import ProjectCard from "../components/ProjectCard"
import { projectsData } from "../constants/data"

const Project = () => {
  console.log("Data", projectsData)

  return (
    <div className="w-full flex flex-wrap justify-between p-2">
      {
        projectsData.projects.map((item) => (
          <div key={item.id}>
            <ProjectCard id={item.id} title={item.title} subtitle={item.subtitle} image={item.images?.thumbnail} />
          </div>
        ))
      }
    </div>
  )
}

export default Project
