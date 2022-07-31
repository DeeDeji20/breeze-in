import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gray-200 text-purple-900'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col
        justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white'>About</p>
            </div>
            <p text-xl>
                Over the past years, I have acquired a diverse set of skills such as web technologies- HTML, CSS + Javascript, and React, backend technologies which includes Java/ Spring boot, python/flask/django and NodeJS.
                I have strong fundamentals and desire to build products/systems that solves people's problems.
                I try to keep pace with the brand new fields and dig into cutting-edge technologies.
            </p>

        </div>
    </div>
  )
}

export default About