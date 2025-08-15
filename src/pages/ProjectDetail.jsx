import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projectsData } from '../constants/data.js';
import Image1 from "../assets/image.png";
import Title from '../components/Title.jsx';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (!id) return;

    const item = projectsData.projects.find((item) => item.id === id);
    if (item) {
      setProject(item);
    } else {
      console.error('Project not found');
    }
  }, [id]);

  // console.log('Project: ', project);
  // console.log('Res', project.responsibilities)

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className='page-frame'>
      <div className='sm:flex justify-between border-b'>
        <div className='sm:w-[30%] py-4'>
          <img src={Image1} alt={project.title} className='w-full h-96 sm:h-full' />
        </div>
        <div className='sm:w-[60%]'>
          <Title title={project.title} />
          <p className='text-lg py-2'>{project.subtitle}</p>
          <p className='w-full flex flex-wrap  gap-3 text-gray-400'>{project.technologies.map((tech) => (
            <span>{tech}</span>
          ))}</p>
          <p className='text-sm py-2'>{project.description}</p>
          <div>
            <h4 className='text-md text-gray-400 py-2'>Features :</h4>
            {
              project.features.map((item, index) => (
                <p className='text-sm py-1'>{index + 1}. {item}.</p>
              ))
            }
          </div>
          <div className='flex gap-3 py-2'>
            <button className='btn border btn-hover'>Github Repo</button>
            <button className='btn border btn-hover'>Go Live</button>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className='pb-2'>
        { project.responsibilities? <h4 className='text-md text-gray-400 py-2'>Responsibilities :</h4> : ' ' }
        {
          project.responsibilities?.map((item) => (
            <span className='text-sm py-1 px-1'> {item}.</span>
          ))
        }
      </div>
      <div className='pb-2'>
        { project.achievements? <h4 className='text-md text-gray-400 py-2'>Achievements :</h4> : ' ' }
        {
          project.achievements?.map((item) => (
            <span className='text-sm py-1 px-1'> {item}.</span>
          ))
        }
      </div>
    </div>
  )
}

export default ProjectDetail;