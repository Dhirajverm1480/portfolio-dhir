import React, { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectsData } from '../constants/data.js';
import Image1 from "../assets/image.png";
import Title from '../components/Title.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ProjectDetail = () => {

  const { id } = useParams();
  const [project, setProject] = useState(null);
  const imgRef = useRef(null)
  const spanStagger = useRef(null)
  const projPara = useRef(null)

  useGSAP(() => {
    if(!imgRef.current) return
    gsap.from(imgRef.current, {
      opacity: 0,
      xPercent: -100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      // delay: 1,
    })

    if(!spanStagger.current) return
    
    gsap.from(spanStagger.current, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      // stagger: 0.06,
      // delay: 1,
    })

    if(!projPara.current) return
    gsap.from(projPara.current, {
      opacity: 0,
      yPercent: 100,
      duration: 1.8,
      ease: 'expo.out',
      stagger: 0.06,
      delay: 1,
    })
  }, [project])

  const filterProject = projectsData.projects.filter(project => project.technologies.includes('React') && project.id !== id)

  useEffect(() => {
    if (!id) return;

    const item = projectsData.projects.find((item) => item.id === id);
    if (item) {
      setProject(item);
    } else {
      console.error('Project not found');
    }

  }, [id]);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div className='page-frame overflow-hidden'>
      <div className='lg:flex justify-between border-b'>
        <div ref={imgRef} className='lg:w-[30%] py-4'>
          <img src={project.image?.thumbnail || Image1} alt={project.title} className='w-full h-96 lg:h-full' />
        </div>
        <div className='lg:w-[60%]'>
          <Title title={project.title} />
          <p className='text-lg py-2'>{project.subtitle}</p>
          <p ref={spanStagger} className='w-full flex flex-wrap  gap-3 text-gray-400'>{project.technologies.map((item, index) => (
            <span key={index}>{item}</span>
          ))}</p>
          <p ref={projPara} className='text-sm py-2'>{project.description}</p>
          <div>
            <h4 className='text-md text-gray-400 py-2'>Features :</h4>
            {
              project.features.map((item, index) => (
                <p key={index} className='text-sm py-1'>{index + 1}. {item}.</p>
              ))
            }
          </div>
          <div className='flex gap-3 py-2'>
            <a href={project.links.github} className='btn border btn-hover flex-center' target='_blank'>Github Repo</a>
            <a href={project.links.live} className='btn border btn-hover flex-center' target='_blank'>Go Live</a>
          </div>
        </div>
      </div>
      {/* <hr /> */}
      <div className='pb-2'>
        {project.responsibilities ? <h4 className='text-md text-gray-400 py-2'>Responsibilities :</h4> : ' '}
        {
          project.responsibilities?.map((item, index) => (
            <span key={index} className='text-sm py-1 px-1'> {item}.</span>
          ))
        }
      </div>
      <div className='pb-2'>
        {project.achievements ? <h4 className='text-md text-gray-400 py-2'>Achievements :</h4> : ' '}
        {
          project.achievements?.map((item, index) => (
            <span key={index} className='text-sm py-1 px-1'> {item}.</span>
          ))
        }
      </div>
      <div>
        <Title title={'Related Project'} />
        <div className="w-full md:flex sm:justify-start sm:flex-wrap p-2">
          {filterProject.map((item) => (
            <div key={item.id} className="md:w-[50%] lg:w-[30%] p-2">
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
    </div>
  )
}

export default ProjectDetail;