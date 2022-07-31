import React from 'react'
import Image from '../assets/portfolio/deola.jpg'
import {RiArrowRightCircleFill} from 'react-icons/ri'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-white'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center
      justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
            <h2 className='text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-pink-600'>
                Adeola Oladeji
            </h2>
            <p className='py-4 max-w-md'>
              I am a software engineer motivated to solve business challenges through innovative technologies.
              I have diverse set of skills, ranging from software development, design thinking, critical thinking
              {/* , with the desire to build products/systems that solves people's problem. */}
            </p>
            <div>
                <Link to='contact'smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2
                flex items-center rounded-md bg-purple-900 cursor-pointer'>
                    Contact
                    <span className='group-hover:rotate-90 duration-300'>
                    <RiArrowRightCircleFill size={25} className='ml-1'/>
                    </span>
                </Link>
            </div>
        </div>

        <div>
            <img src={Image} alt='profile'
            className='rounded-2xl mx-auto w-2/3 l:w-full' />
        </div>
      </div>
    </div>
  )
}

export default Home