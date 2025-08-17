import React from 'react'
import Title from './Title'

const Skill = ({ title, description, level, technologies, tools, status }) => {
    return (
        <div className='w-full'>
            <Title title={title} />
            <div className='py-2 flex flex-wrap justify-between'>
                {
                    technologies?.map((item, index) => (
                        <span key={index} className='text-gray-400 text-sm'>{item},</span>
                    ))
                }
            </div>
            <p className='py-2 text-sm'>{description}</p>
            
            <div className='py-2 flex flex-wrap justify-between'>
                {
                    tools?.map((item, index) => (
                        <span key={index} className='text-gray-400 text-sm'>{item},</span>
                    ))
                }
            </div>
            <p className='py-2'>{status}</p>

            {/* other way */}

            {/* <div className='lg:flex'>
                <div className='lg:w-[30%]'></div>

                <div className='lg:w-[70%]'>
                    <div className='py-2 flex flex-wrap justify-between'>
                        {
                            technologies?.map((item) => (
                                <span className='text-gray-400 text-sm'>{item},</span>
                            ))
                        }
                    </div>
                    <p className='py-2 text-sm'>{description}</p>

                    <div className='py-2 flex flex-wrap justify-between'>
                        {
                            tools?.map((item) => (
                                <span className='text-gray-400 text-sm'>{item},</span>
                            ))
                        }
                    </div>
                    <p className='py-2'>{status}</p>
                </div>
            </div> */}
        </div>
    )
}

export default Skill
