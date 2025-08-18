import React from 'react'
import { skillData } from '../constants/data'
import Skill from '../components/Skill'
import Title from '../components/Title'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Skills = () => {

  useGSAP(() => {
    gsap.from('#skill-div', {
      opacity: 0,
      xPercent: -100,
      duration: 2.8,
      ease: 'expo.out',
      stagger: 0.08,
      // delay: 1,
    })
  }, [])
  
  return (
    <div className='page-frame'>
      <div></div>
      {/* <Title title={'Skills'} /> */}
      <div className='w-full sm:flex flex-wrap justify-between backdrop-blur-sm'>
        {
          skillData.skills.map((item) => (
            <div id='skill-div' key={item.id} className='md:w-[45%] lg:w-[30%]'>
              <Skill title={item.name} description={item.description} level={item.level} technologies={item.technologies} tools={item.tools} status={item.status} />
            </div>
          ))
        }
      </div>

      {/* <div>
        <Title title={'Certification'} />
      </div> */}
    </div>
  )
}

export default Skills
