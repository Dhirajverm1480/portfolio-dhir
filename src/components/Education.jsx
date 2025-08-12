import React from 'react'
import Title from './Title'

const Education = ({ title, institution, start, end, duration }) => {
    return (
        <div>
            <Title title={title} />
            <div className='sm:flex justify-between text-gray-400 py-2'>
                <p>{institution}</p>
                <div className='flex gap-2'>
                    <span>{start}</span>
                    <span>{end}</span>
                </div>
                <span>{duration}</span>
            </div>
        </div>
    )
}

export default Education
