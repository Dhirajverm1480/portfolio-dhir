import React from 'react'
import Title from './Title'

const Hobby = ({ title, description, frequency, relatedSkill }) => {
    return (
        <div className='w-full'>
            <Title title={title} />
            <div className='flex flex-wrap justify-between py-2 text-gray-400'>
                {
                    relatedSkill.map((item, index) => (
                        <span key={index} className='text-sm'>{item},</span>
                    ))
                }
            </div>
            <p className='text-sm py-2'>{description}</p>
            <span className='text-gray-400'>{frequency}</span>
        </div>
    )
}

export default Hobby
