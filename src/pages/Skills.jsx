import React from 'react'
import { skillData } from '../constants/data'
import Skill from '../components/Skill'
import Title from '../components/Title'

const Skills = () => {
  return (
    <div className='page-frame'>
      {/* <Title title={'Skills'} /> */}
      <div className='w-full sm:flex flex-wrap justify-between backdrop-blur-sm'>
        {
          skillData.skills.map((item) => (
            <div key={item.id} className='sm:w-[30%]'>
              <Skill title={item.name} description={item.description} level={item.level} technologies={item.technologies} tools={item.tools} status={item.status} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
