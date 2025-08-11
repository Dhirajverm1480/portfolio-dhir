import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { projectsData } from '../constants/data.js';

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

  console.log('Project: ', project);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      
    </div>
  )
}

export default ProjectDetail;
