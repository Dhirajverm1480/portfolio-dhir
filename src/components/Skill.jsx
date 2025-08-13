import React from 'react'
import Title from './Title'

const Skill = ({ title, description, level, technologies, tools, status }) => {
    return (
        <div className='w-full'>
            <Title title={title} />
            <div className='py-2 flex flex-wrap justify-between'>
                {
                    technologies?.map((item) => (
                        <span className='text-gray-400'>{item},</span>
                    ))
                }
            </div>
            <p className='py-2'>{description}</p>
            
            <div className='py-2 flex flex-wrap justify-between'>
                {
                    tools?.map((item) => (
                        <span className='text-gray-400'>{item},</span>
                    ))
                }
            </div>
            <p className='py-2'>{status}</p>
        </div>
    )
}

export default Skill
